export const articleSlugFromId = (id) => id.split('/').at(-1).replace(/\.mdx?$/, '');

export const articlePath = (hub, id) => `/articles/${hub}/${articleSlugFromId(id)}/`;
