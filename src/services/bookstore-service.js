export default class BookstoreService {

  data = [{
      id: 1,
      title: 'Аладін',
      author: 'Від 5 до 8 років',
      price: 120,
      coverImage: 'https://club.egmont.ua/wp-content/uploads/2014/06/cover_0003_004_AladdinClub_cover.png'
    },
    {
      id: 2,
      title: 'Крижане серце',
      author: 'Від 6 до 9 років',
      price: 150,
      coverImage: 'https://club.egmont.ua/wp-content/uploads/2014/06/044_Frozen_cover.jpg'
    },

    {
      id: 3,
      title: 'Рапунцель',
      author: 'Від 5 до 8 років',
      price: 180,
      coverImage: 'https://club.egmont.ua/wp-content/uploads/2014/06/027_RapuncelKKD_cover.jpg'
    },
    {
      id: 4,
      title: 'Русалонька',
      author: 'Від 3 до 6 років',
      price: 210,
      coverImage: 'https://club.egmont.ua/wp-content/uploads/2014/06/cover_0001_030_Rusalonka_cover.png'
    },
    {
      id: 5,
      title: 'Бембі',
      author: 'Від 2 до 5 років',
      price: 75,
      coverImage: 'https://club.egmont.ua/wp-content/uploads/2014/06/cover_0002_008_BambyClub_cover.png'
    },
    {
      id: 6,
      title: 'Дамбо',
      author: 'Від 2 до 5 років',
      price: 110,
      coverImage: 'https://club.egmont.ua/wp-content/uploads/2014/06/cover_0004_013_Dumbo_Cover.png'
    },
    
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}