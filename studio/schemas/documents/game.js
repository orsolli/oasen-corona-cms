export default {
    name: 'game',
    type: 'document',
    title: 'Game',
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
  