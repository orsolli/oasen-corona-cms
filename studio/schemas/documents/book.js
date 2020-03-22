export default {
    name: 'book',
    type: 'document',
    title: 'Book',
    fields: [
        {
          name: 'title',
          type: 'string'
        },
        {
          name: 'thumbnail',
          type: 'string'
        }
    ],
    preview: {
      select: {
        title: 'title',
        thumbnail: 'thumbnail'
      }
    }
  }
  