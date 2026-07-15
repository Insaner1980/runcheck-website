import assert from 'node:assert/strict';
import test from 'node:test';

import { ARTICLE_SLUG_MAX_LENGTH, localizedSeoSlug } from '../src/data/articleSlugs.mjs';

test('prosenttimerkki lokalisoituu localen omalla sanalla', () => {
  const expected = {
    fi: 'akun-kunto-alle-80-prosenttia',
    sv: 'batterihalsa-under-80-procent',
    nb: 'batterihelse-under-80-prosent',
    da: 'batteritilstand-under-80-procent',
    de: 'akkuzustand-unter-80-prozent',
    fr: 'etat-de-la-batterie-sous-80-pour-cent',
    es: 'estado-de-la-bateria-por-debajo-del-80-por-ciento',
    it: 'stato-della-batteria-sotto-l-80-per-cento',
    pt: 'estado-da-bateria-abaixo-de-80-por-cento',
  };
  const titles = {
    fi: 'Akun kunto alle 80 %', sv: 'Batterihälsa under 80 %', nb: 'Batterihelse under 80 %',
    da: 'Batteritilstand under 80 %', de: 'Akkuzustand unter 80 %', fr: 'État de la batterie sous 80 %',
    es: 'Estado de la batería por debajo del 80 %', it: "Stato della batteria sotto l'80 %", pt: 'Estado da bateria abaixo de 80 %',
  };

  for (const locale of Object.keys(expected)) {
    assert.equal(localizedSeoSlug(titles[locale], locale, 999), expected[locale]);
    if (locale !== 'fi') assert.doesNotMatch(localizedSeoSlug(titles[locale], locale, 999), /prosenttia/, `${locale} ei saa periä suomen prosenttisanaa.`);
  }
  assert.equal(localizedSeoSlug('Akun käyttö 80 %:ssa ja lataus 80 %:iin', 'fi', 999), 'akun-kaytto-80-prosentissa-ja-lataus-80-prosenttiin');
});

test('90 merkin raja säilyttää kokonaiset sanat ja poistaa katkenneen stopword-lopun', () => {
  const cases = [
    ['en', 'How to understand Android battery support and security updates of every supported phone model'],
    ['sv', 'Så kontrollerar du batteriets kapacitet och säkerhetsuppdateringar och vad du behöver veta'],
    ['nb', 'Slik kontrollerer du batterikapasitet og sikkerhetsoppdateringer og hva du bør vite'],
    ['da', 'Sådan kontrollerer du batterikapacitet og sikkerhedsopdateringer og hvad du bør vide'],
    ['de', 'So prüfst du Akkukapazität und Sicherheitsupdates und was du darüber wissen solltest'],
    ['fr', 'Comment vérifier la batterie et le cycle des mises à jour de sécurité de votre téléphone'],
    ['es', 'Cómo comprobar la batería y el ciclo de actualizaciones de seguridad de tu teléfono'],
    ['it', 'Come controllare la batteria e il ciclo degli aggiornamenti di sicurezza di ogni telefono'],
    ['pt', 'Como verificar a bateria e o ciclo das atualizações de segurança de cada telemóvel'],
  ];

  for (const [locale, title] of cases) {
    const slug = localizedSeoSlug(title, locale, 999, 72);
    assert.ok(slug.length <= 72, `${locale}: slug ylitti rajan.`);
    assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(slug, localizedSeoSlug(title, locale, 999, 72), `${locale}: slug ei ollut deterministinen.`);
    assert.doesNotMatch(slug, /-(?:de|di|of|und|och|og|e|y)$/, `${locale}: slug päättyi irralliseen stopwordiin.`);
  }
});

test('hyväksytyt poikkeukset ja oletusraja säilyvät vakaina', () => {
  assert.equal(localizedSeoSlug('mikä tahansa', 'fi', 160), 'samsung-diagnostiikkavalikko-kattava-opas');
  assert.equal(localizedSeoSlug('mikä tahansa', 'es', 123), 'soporte-actualizaciones-seguridad-movil-android');
  assert.equal(localizedSeoSlug('Codici diagnostici Android: elenco completo per produttore', 'it', 113), 'codici-di-servizio-android-per-marca-quali-funzionano-ancora');
  assert.ok(localizedSeoSlug('a '.repeat(200), 'en', 999).length <= ARTICLE_SLUG_MAX_LENGTH);
});
