const BREADCRUMB_CONTENT = [
  {
    text: 'Bosh sahifa',
    link: 'index.html',
  },
  {
    text: 'Blog',
    link: 'blog.html',
  },
];

const TAB_CONTENT = [
  'Barchasi',
  'Bitiruv marosimi',
  'Master-klass',
  'Musobaqa',
  'Dasturlash',
  'Najot Quiz',
];

const POSTS = [
  {
    id: 24,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      "16-aprel kuni «Najot Ta'lim»da SMM menejerlari uchun story management bo'yicha bilimlarini sinovdan o'tkazishdi",
    shortDesc: "«SMM musobaqasi» bo'lib o'tdi",
    image: 'posts/images/8349f073-69d9-4efd-b0a0-59fb5d0cefa6.png',
    viewCount: 152,
    createdAt: '19-aprel, 2023',
  },
  {
    id: 23,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      "Farg'ona filialida «Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass bo'lib o'tdi",
    shortDesc:
      '«Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass',
    image: 'posts/images/bdd3d054-d0f3-4d33-9e22-f8ad3fd16221.png',
    viewCount: 99,
    createdAt: '19-aprel, 2023',
  },
  {
    id: 22,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      "SMM-menejer va Grafik dizaynerlar o'rtasidagi «Marketing Team» jamoaviy musobaqasi g'oliblariga sertifikat va esdalik sovg'alar topshirildi",
    shortDesc: "«Marketing Team» musobaqasi g'oliblari e'lon qilindi",
    image: 'posts/images/c1c5175d-6fa8-4ee3-bb52-d39a5ff3d2e9.png',
    viewCount: 112,
    createdAt: '19-aprel, 2023',
  },
  {
    id: 21,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      " 2-aprel kuni bo'lib o'tgan dasturlash bo'yicha «Algoritmlash» musobaqasi g'oliblari aniqlandi. Musobaqa g'oliblari...",
    shortDesc: "Dasturchilar o'rtasida «Algoritmlash» musobaqasi",
    image: 'posts/images/60f9c649-0973-4584-af66-396307ac1ddb.png',
    viewCount: 102,
    createdAt: '19-aprel, 2023',
  },
  {
    id: 20,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      '«Iwash» va «Carbon technologies» loyihalari asoschilari bilan «Shaxsiy brendni rivojlantirish» mavzusida master-klass tashkil etildi',
    shortDesc: 'Otabek Jurayev va Behzodbek Shoyunusovlar bilan master-klass',
    image: 'posts/images/c2e6984b-5710-4eab-9791-0d070f7fb68c.png',
    viewCount: 189,
    createdAt: '19-aprel, 2023',
  },
  {
    id: 19,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      '100 ga yaqin SMM-menejer va grafik dizaynerlar «Marketing Team» musobaqasida jamoaviy tarzda bellashishdi',
    shortDesc: '«Marketing Team» jamoaviy musobaqasi',
    image: 'posts/images/1558c8f4-6ade-4834-ae00-ddf3410b512b.jpg',
    viewCount: 275,
    createdAt: '11-aprel, 2023',
  },
  {
    id: 18,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      "12 soat davom etgan «Frontend dasturlash» musobaqasi yakunlandi. G'oliblar...",
    shortDesc:
      "«Najot Ta'lim» markazida «Frontend veb-dasturlash» musobaqasi bo'lib o'tdi",
    image: 'posts/images/156d1b63-e7e7-46d8-8d44-748547992108.jpg',
    viewCount: 262,
    createdAt: '11-aprel, 2023',
  },
  {
    id: 17,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      "Farg'ona filialida markazimiz O'quv bo'limi rahbari Javohir Izzatulloh bilan master-klass o'tkazildi",
    shortDesc: "Javohir Izzatulloh bilan Farg'ona filialida master-klass",
    image: 'posts/images/b9a2c838-a2e6-47c1-b2f3-0e2b9fc85e25.jpg',
    viewCount: 215,
    createdAt: '11-aprel, 2023',
  },
  {
    id: 16,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      "Hasanxon Yahyo Abdulmajid domla ta'lim olish bo'yicha ilmiy suhbat tashkil etildi",
    shortDesc: "Ta'lim olish mavzusida ilmiy suhbat",
    image: 'posts/images/ccaf791c-3dd6-4764-b2c4-d92397374afe.jpg',
    viewCount: 355,
    createdAt: '11-aprel, 2023',
  },
  {
    id: 15,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      "«Cambridge» va «Modme» loyihalar asosichi va rahbari Jahongir Po'latov bilan master-klass bo'lib o'tdi",
    shortDesc:
      "Jahongir Po'latov bilan «Qanday qilib muvaffaqiyatli startup qilish mumkin?» mavzusida master-klass",
    image: 'posts/images/bede7fae-9226-4e1d-9093-80c206a21d22.jpg',
    viewCount: 181,
    createdAt: '11-aprel, 2023',
  },
  {
    id: 14,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      "«Najot Ta'lim»da 100 dan ortiq grafik dizaynerlar o'rtasida navbatdagi «Dizayn battle» musobaqasi o'tkazildi",
    shortDesc: "Grafik dizaynerlar o'rtasida katta musobaqa bo'lib o'tdi",
    image: 'posts/images/621ccc7d-ec55-4cd5-924c-cb78015fdaed.jpg',
    viewCount: 194,
    createdAt: '4-aprel, 2023',
  },
  {
    id: 13,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      "50 ga yaqin dasturchilar soha bo'yicha bilimlarini «Algoritmlash» musobaqasida sinovdan o'tkazishdi. Musobaqa g'oliblari...  ",
    shortDesc: "«Najot Ta'lim»da «Algoritmlash» musobaqasi tashkil etildi",
    image: 'posts/images/f731ca99-b0fc-45bc-af28-140e664f8293.jpg',
    viewCount: 208,
    createdAt: '4-aprel, 2023',
  },
  {
    id: 12,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      "Farg'ona filialida «Qanday qilib kuchli Software engineer bo'lish mumkin?» mavzusida master-klass tashkil etildi",
    shortDesc:
      "Ihtiyor Vohobjonov bilan markazimizning Farg'ona filialida master-klass tashkil etildi",
    image: 'posts/images/ff48d6de-8826-40a8-99ae-d50fc56ff0c0.jpg',
    viewCount: 123,
    createdAt: '4-aprel, 2023',
  },
  {
    id: 11,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      "Aziz Rahimov bilan «Yoshlikda qanday ko'nikmalarni shakllantirish kerak?» mavzusida master-klass bo'lib o'tdi",
    shortDesc: "Aziz Rahimov bilan master-klass bo'lib o'tdi",
    image: 'posts/images/c2b3d20f-a743-4720-a779-91a4729a5e9f.jpg',
    viewCount: 226,
    createdAt: '4-aprel, 2023',
  },
  {
    id: 10,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title:
      "Farg'ona filialida Chexiyaning «Webtoad» kompaniyasi Frontend Engineer dasturchisi Akbarjon Tojiyev bilan suhbat bo'lib o'tdi",
    shortDesc: "«Najot Ta'lim» Farg'ona filialida master-klass bo'lib o'tdi",
    image: 'posts/images/f23bf8dd-3006-4039-8691-3e78e6711737.jpg',
    viewCount: 120,
    createdAt: '28-mart, 2023',
  },
  {
    id: 9,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      "11-mart kuni o'tkazilgan «Frontend dasturlash» musobaqasi g'oliblari e'lon qilindi. «UX Developers» jamoasi birinchi ...",
    shortDesc:
      "«Frontend dasturlash» musobaqasi g'oliblariga sertifikat va esdalik sovg'alari topshirildi",
    image: 'posts/images/29b36ac5-9971-4d53-9772-b52f259bf694.jpg',
    viewCount: 87,
    createdAt: '28-mart, 2023',
  },
  {
    id: 7,
    name: 'Najot Quiz',
    firstName: "«Najot Ta'lim» ",
    title:
      "Markazimizda ilk bor «Najot Quiz» musobaqasi tashkil etildi. Yakunda 40 ga yaqin jamoalar ichidan «Sharpist» jamoasi g'oliblikni qo'lga kiritdi",
    shortDesc:
      "300 ga yaqin o'quvchilarimiz «Najot Quiz» musobaqasida bellashishdi!",
    image: 'posts/images/c2cff580-0e14-4fd4-8c24-847c3fd40178.jpg',
    viewCount: 264,
    createdAt: '28-mart, 2023',
  },
  {
    id: 6,
    name: 'Bitiruv marosimi',
    firstName: "«Najot Ta'lim» ",
    title:
      "132 nafar «Najot Ta'lim» o'quvchilariga bitiruv sertifikatlari va umumiy qiymati 40,000,000 so'mga yaqin bo'lgan ta'lim vaucherlari topshirildi",
    shortDesc:
      "25-mart — shanba kuni markazimizning Chilonzor filialida Bitiruv marosimi bo'lib o'tdi.",
    image: 'posts/images/f42d3476-f1e4-41a1-b9d6-aaf87cb6927f.jpg',
    viewCount: 279,
    createdAt: '28-mart, 2023',
  },
  {
    id: 5,
    name: 'Dasturlash',
    firstName: "«Najot Ta'lim» ",
    title: 'Python dasturlash tilini o’rganish uchun 7 ta bepul sayt',
    shortDesc: "Bu saytlar bilan dasturlashni bepulga o'rganasiz",
    image: 'posts/images/099bd0e7-d68d-444e-a79e-af82115fbc66.png',
    viewCount: 337,
    createdAt: '7-mart, 2023',
  },
  {
    id: 4,
    name: 'Musobaqa',
    firstName: "«Najot Ta'lim» ",
    title:
      "10 soat davom etgan «Frontend veb-dasturlash» musobaqasi yakunlandi. G'oliblar...",
    shortDesc:
      "22-yanvar kuni «Najot Ta'lim»da Frontend dasturchilari o'rtasida ham katta musobaqa o'tkazildi. ",
    image: 'posts/images/e7c4698b-af9d-4782-93a3-608f7e84404e.png',
    viewCount: 300,
    createdAt: '24-yanvar, 2023',
  },
  {
    id: 2,
    name: 'Master-klass',
    firstName: "«Najot Ta'lim» ",
    title: "«Najot Ta'lim» Grafik dizayn kursi ustozlaridan katta master-klass",
    shortDesc:
      "21-yanvar — shanba kuni Grafik dizayn yo'nalishida «Najot Ta'lim» ustozlari tomonidan katta master-klass o'tkazildi. Bu galgi master-klass soha bo'yicha turli mavzularni qamrab olgani bilan ajralib turdi.",
    image: 'posts/images/4004cab4-f337-4cf0-9d72-924381436f63.png',
    viewCount: 248,
    createdAt: '24-yanvar, 2023',
  },
  {
    id: 1,
    name: 'Bitiruv marosimi',
    firstName: "«Najot Ta'lim» ",
    title:
      "120 nafar «Najot Ta'lim» o'quvchilariga bitiruv sertifikatlari topshirildi",
    shortDesc:
      "21-yanvar — shanba kuni «Najot Ta'lim» Chilonzor filialida navbatdagi bitiruv marosimi bo'lib o'tdi. ",
    image: 'posts/images/0e0deec6-69ec-43db-b82b-1bc734575f47.png',
    viewCount: 166,
    createdAt: '24-yanvar, 2023',
  },
];
