const importGifs = import.meta.glob('../../assets/gifs/*gif', { 
    eager: true })

export const gifs = Object.keys(importGifs).map(key => ({
    src: importGifs[key].default,
    alt: key.split('/').pop().replace('.gif', '')
}));