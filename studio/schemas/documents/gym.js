export default {
    name: 'gym',
    type: 'document',
    title: 'Gym',
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
  