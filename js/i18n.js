/**
 * LUSSONI — Internationalization (i18n)
 * Georgian (ქართული - Default) & English (EN)
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'lussoni_lang';
  const DEFAULT_LANG = 'ka'; // Georgian is default

  const TRANSLATIONS = {
    ka: {
      // Document metadata
      meta: {
        homeTitle: "Lussoni — ლუქს ავეჯი | რელიქვია თანამედროვე სახლისთვის",
        homeDesc: "Lussoni ქმნის გამორჩეულ ავეჯს გამორჩეული სივრცეებისთვის. დაათვალიერეთ ხელით შექმნილი დივნების, სასადილო მაგიდების და აქცენტების კოლექციები — თითოეული ხელოვნების ნიმუშია.",
        collectionTitle: "ყველა კოლექცია — Lussoni ლუქს ავეჯი",
        collectionDesc: "დაათვალიერეთ Lussoni-ის სრული კოლექცია — გამორჩეული დივნები, სასადილო მაგიდები, სავარძლები, საწოლები და დეკორატიული ავეჯი, შექმნილი იტალიაში.",
        productTitle: "სავარძელი Renard — Lussoni",
        productDesc: "სავარძელი Renard Lussoni-ისგან — უმაღლესი ხარისხის კონიაკისფერი ტყავი და ხელით ნაკვეთი კაკლის კარკასი. მზადდება შეკვეთით მილანის ატელიეში. €3,850-დან."
      },

      // Navigation & Shared UI
      nav: {
        home: "მთავარი",
        collections: "კოლექციები",
        living: "მისაღები",
        dining: "სასადილო",
        bedroom: "საძინებელი",
        atelier: "ატელიე",
        searchAria: "ძიება",
        wishlistAria: "რჩეულები",
        cartAria: "კალათა",
        menuAria: "მენიუს გახსნა"
      },

      // Common / Actions
      common: {
        explore: "დათვალიერება",
        view: "ნახვა →",
        quickView: "სწრაფი ნახვა",
        new: "ახალი",
        bestseller: "ბესტსელერი",
        scroll: "ჩამოშლა",
        viewAll: "ყველას ნახვა",
        currency: "€",
        inclVat: "დღგ-ს ჩათვლით",
        addToCart: "კალათაში დამატება",
        addedToCart: "✓ დაემატა კალათაში",
        addToWishlist: "რჩეულებში დამატება",
        removeFromWishlist: "რჩეულებიდან ამოშლა"
      },

      // Homepage: Hero
      hero: {
        eyebrow: "დაარსდა 1987 წელს — მილანი",
        headline: "სადაც ყოველი ოთახი<br /><em>ისტორიას ჰყვება</em>",
        sub: "ავეჯი, რომელიც დროს უძლებს. შექმნილი მათთვის, ვინც მხოლოდ საუკეთესოს ითხოვს.",
        ctaExplore: "კოლექციის დათვალიერება",
        ctaStory: "ჩვენი ისტორია"
      },

      // Homepage: Manifesto
      manifesto: {
        text: "Lussoni-ში გვწამს, რომ სახლი მისი მცხოვრებლების პორტრეტია. ყოველი ნივთი, რომელსაც ვქმნით, არის ერთგულების გამოხატულება — მასალის, ფორმის და იმ ოსტატების მიმართ, რომელთა ხელებიც ქმნიან თაობებისთვის განკუთვნილ ღირებულებებს."
      },

      // Homepage: Stats Strip
      stats: {
        years: "ოსტატობის წელი",
        pieces: "შექმნილი ნივთი",
        countries: "ქვეყანაში მიწოდება",
        awards: "დიზაინის ჯილდო"
      },

      // Homepage: Featured Collections
      featured: {
        eyebrow: "შერჩეული სამყარო",
        title: "კოლექციები",
        living: "მისაღები ოთახი",
        dining: "სასადილო",
        bedroom: "საძინებელი"
      },

      // Homepage & Shared: Products
      products: {
        eyebrow: "რჩეული ნამუშევრები",
        title: "ახალი კოლექცია",
        p1Name: "სავარძელი Renard",
        p1Cat: "დასაჯდომი",
        p1Mat: "ნატურალური ტყავი · კაკალი",
        p2Name: "მოსასვენებელი კომპლექტი Nuvola",
        p2Cat: "დასაჯდომი",
        p2Mat: "ბუკლეს ქსოვილი · მასიური კაკალი",
        p3Name: "ჟურნალის მაგიდა Calacatta",
        p3Cat: "მაგიდები",
        p3Mat: "Calacatta მარმარილო · თითბერი",
        p4Name: "ღია თაროები Meridian",
        p4Cat: "სათავსო",
        p4Mat: "შავი კაკალი · თითბერის დეტალები",
        p5Name: "სასადილო მაგიდა Ovale",
        p5Cat: "სასადილო",
        p5Mat: "მუქი კაკალი · თითბერი",
        p6Name: "დივანი Velours",
        p6Cat: "დასაჯდომი",
        p6Mat: "ხავერდი · თითბერის ფეხები",
        p7Name: "დივანი Palazzo",
        p7Cat: "დასაჯდომი",
        p7Mat: "ბელგიური სელი · შებოლილი მუხა",
        p8Name: "საწოლი Imperiale",
        p8Cat: "საძინებელი",
        p8Mat: "ანთრაციტის ხავერდი · მასიური თითბერი"
      },

      // Homepage: Craftsmanship
      craft: {
        eyebrow: "Lussoni-ის ატელიე",
        title: "შექმნის<br /><em>ხელოვნება</em>",
        body: "Lussoni-ის ყოველი ნაკეთობა იწყება ჩანახატით, იქცევა დიალოგად დიზაინერსა და ოსტატს შორის და სრულდება საგვარეულო რელიქვიად. ჩვენ ვიყენებთ მხოლოდ ეკოლოგიურად მოპოვებულ ძვირფას ხეს, ხელით დამუშავებულ ტყავს და მასიური თითბერისგან ჩამოსხმულ დეტალებს — არასდროს მოოქროვილი, არასდროს აჩქარებული.",
        cta: "პროცესის გაცნობა"
      },

      // Homepage: Materials
      materials: {
        eyebrow: "მასალის ინტელექტი",
        title: "ქსოვილი &amp; ფორმა,<br />გაერთიანებული",
        body: "ნორმანდიის ველური სელიდან დაწყებული კორდობას მცენარეულად დამუშავებული ტყავით დამთავრებული, Lussoni-ში ყოველი მასალა ირჩევა მისი ხასიათის გამო — როგორი იქნება ის არა მხოლოდ დღეს, არამედ ოცდაათი წლის შემდეგაც.",
        pill1: "სელი &amp; ბუკლე",
        pill2: "ნატურალური ტყავი",
        pill3: "შავი კაკალი",
        pill4: "მასიური თითბერი",
        pill5: "Calacatta მარმარილო",
        pill6: "შებოლილი მუხა",
        cta: "მასალის მიხედვით შერჩევა"
      },

      // Homepage: Testimonials
      testimonials: {
        t1Text: "სავარძელი Renard ჩვენი მისაღები ოთახის სული გახდა. ავეჯის შეგროვების ათწლიანი გამოცდილების განმავლობაში, არაფერი შედარებულა Lussoni-ის პროპორციებისა და დასრულების სიზუსტესთან.",
        t1Author: "იზაბელ ფონტენი",
        t1Role: "ინტერიერის დიზაინერი, პარიზი",
        t2Text: "მთელი ჩვენი პენტჰაუსი Lussoni-ით მოვაწყვეთ. ხარისხი შეუდარებელია — ხოლო პროცესი ისეთივე პერსონალური იყო, როგორც ინდივიდუალური კოსტიუმის შეკერვა.",
        t2Author: "მარკო და ჯულია ფერანტე",
        t2Role: "მილანი",
        t3Text: "რაც Lussoni-ში ყველაზე მეტად მხიბლავს, არის თავშეკავება — არაფერია გადატვირთული. ყოველ დეტალს თავისი ადგილი აქვს. ეს არის ავეჯი, რომელიც პატივს სცემს სივრცეს.",
        t3Author: "დევიდ თორნტონი",
        t3Role: "Architectural Digest, ნიუ-იორკი"
      },

      // Homepage: Newsletter
      newsletter: {
        eyebrow: "ექსკლუზიური წვდომა",
        title: "გაიგეთ პირველმა.<br /><em>ყოველთვის.</em>",
        sub: "ახალი კოლექციები, დახურული ჩვენებები და საკოლექციო გამოცემები — ყველაზე ადრე თქვენთან.",
        placeholder: "თქვენი ელ.ფოსტის მისამართი",
        subscribe: "გამოწერა",
        legal: "გამოწერით თქვენ ეთანხმებით ჩვენს კონფიდენციალურობის პოლიტიკას. გაუქმება შესაძლებელია ნებისმიერ დროს."
      },

      // Homepage: Press
      press: {
        eyebrow: "გამოხმაურება პრესაში"
      },

      // Footer
      footer: {
        tagline: "გამორჩეული ავეჯი გამორჩეული სივრცეებისთვის. დამზადებულია იტალიაში 1987 წლიდან.",
        colCollections: "კოლექციები",
        colServices: "სერვისები",
        colCompany: "კომპანია",
        colHelp: "დახმარება",
        livingRoom: "მისაღები ოთახი",
        diningRoom: "სასადილო ოთახი",
        bedroom: "საძინებელი",
        homeOffice: "სამუშაო კაბინეტი",
        outdoor: "ღია სივრცე",
        storage: "სათავსო",
        newArrivals: "ახალი კოლექცია",
        bespoke: "ინდივიდუალური შეკვეთები",
        consultation: "ინტერიერის კონსულტაცია",
        whiteGlove: "პრემიუმ მიწოდება (White Glove)",
        tradeProgramme: "პარტნიორული პროგრამა",
        restoration: "რესტავრაცია",
        ourStory: "ჩვენი ისტორია",
        atelier: "ატელიე",
        press: "პრესა",
        careers: "კარიერა",
        contact: "კონტაქტი",
        showrooms: "შოურუმები",
        deliveryInfo: "მიწოდების ინფორმაცია",
        copyright: "© 2026 Lussoni S.p.A. ყველა უფლება დაცულია.",
        privacy: "კონფიდენციალურობა",
        cookies: "Cookie პოლიტიკა",
        terms: "გაყიდვის პირობები"
      },

      // Collection Page
      collectionPage: {
        eyebrow: "სრული ასორტიმენტი",
        title: "ყველა კოლექცია",
        sub: "ყოველი ოთახი. ყოველი ისტორია. ყოველი ნივთი შექმნილი სიცოცხლის ხანგრძლივობით.",
        tabAll: "ყველა",
        tabSeating: "დასაჯდომი",
        tabTables: "მაგიდები",
        tabBedroom: "საძინებელი",
        tabStorage: "სათავსო",
        filterTitle: "ფილტრი",
        clearAll: "გასუფთავება",
        priceRange: "ფასის დიაპაზონი",
        under2k: "€2,000-მდე",
        p2to4k: "€2,000 – €4,000",
        p4to8k: "€4,000 – €8,000",
        over8k: "€8,000+",
        material: "მასალა",
        matWalnut: "შავი კაკალი",
        matLeather: "ნატურალური ტყავი",
        matLinen: "სელი &amp; ბუკლე",
        matMarble: "მარმარილო",
        matBrass: "მასიური თითბერი",
        style: "სტილი",
        styleContemporary: "თანამედროვე",
        styleClassical: "კლასიკური",
        styleArtDeco: "არ-დეკო",
        styleMinimal: "მინიმალისტური",
        availability: "ხელმისაწვდომობა",
        inStock: "მარაგშია",
        madeToOrder: "შეკვეთით",
        showingPrefix: "ნაჩვენებია",
        pieceSingular: "ნივთი",
        piecePlural: "ნივთი",
        sortFeatured: "რეკომენდებული",
        sortPriceAsc: "ფასი: დაბლიდან მაღლა",
        sortPriceDesc: "ფასი: მაღლიდან დაბლა",
        sortNewest: "უახლესი",
        sortName: "სახელი: ა–ჰ",
        emptyTitle: "ნივთები ვერ მოიძებნა",
        emptySub: "სცადეთ ფილტრების შეცვლა კოლექციის სანახავად.",
        emptyBtn: "ფილტრების გასუფთავება",
        loadMore: "მეტის ჩატვირთვა",
        loading: "იტვირთება…",
        allLoaded: "ყველა ნივთი ჩატვირთულია",
        noMore: "მეტი ნივთი არ არის"
      },

      // Product Page
      productPage: {
        categoryEyebrow: "დასაჯდომი · მზადდება შეკვეთით",
        breadcrumbHome: "მთავარი",
        breadcrumbCollections: "კოლექციები",
        breadcrumbSeating: "დასაჯდომი",
        badgeCraft: "ხელნაკეთი",
        badgeOrigin: "მილანი, იტალია",
        ratingText: "4.9 (47 შეფასება)",
        upholsteryLabel: "შემოსვა",
        frameLabel: "კარკასის დამუშავება",
        swatchCognac: "კონიაკისფერი ტყავი",
        swatchNoir: "შავი ტყავი",
        swatchSage: "სალბისფერი ბუკლე",
        swatchIvory: "სპილოსძვლისფერი სელი",
        swatchCharcoal: "ანთრაციტის ხავერდი",
        swatchWalnut: "დაზეთილი კაკალი",
        swatchSmoked: "შებოლილი მუხა",
        swatchBrass: "მასიური თითბერი",
        delivery1: "პრემიუმ მიწოდება (White Glove) — 6–8 კვირა",
        delivery2: "უფასო აწყობა და მონტაჟი",
        delivery3: "ოსტატობის 10-წლიანი გარანტია",
        descTitle: "აღწერა",
        descContent: "სავარძელი Renard-ი თავისი სამეფო დგომით გამოირჩევა — თავშეკავებული ავტორიტეტი, რომელიც გამოიხატება ღრმად ჩაკერილი საზურგითა და სკულპტურული კაკლის კარკასით. კორდობას მცენარეულად დამუშავებული ნატურალური ტყავი ათწლეულების განმავლობაში იძენს განუმეორებელ პატინას. ხის შეერთებები ხელით იჭრება ჩვენს მილანურ ატელიეში და მუშავდება ბუნებრივი ზეთებით.<br /><br />ნივთი თაობებისთვის.",
        specTitle: "ზომები &amp; სპეციფიკაციები",
        specWidth: "სიგანე",
        specDepth: "სიღრმე",
        specHeight: "სიმაღლე",
        specSeatHeight: "დასაჯდომის სიმაღლე",
        specWeight: "წონა",
        specFrame: "კარკასი",
        specFrameVal: "მასიური შავი კაკალი",
        specUpholstery: "შემოსვა",
        specUpholsteryVal: "ნატურალური ტყავი",
        specFilling: "შიგთავსი",
        specFillingVal: "მაღალი სიმკვრივის ქაფი + ფრთა",
        specOrigin: "წარმოშობა",
        specOriginVal: "ხელნაკეთი მილანში, იტალია",
        careTitle: "მოვლა &amp; ექსპლუატაცია",
        careContent: "Renard-ის ტყავი ბუნებრივია და დროთა განმავლობაში იძენს ულამაზეს პატინას. გაწმინდეთ ოდნავ ნესტიანი ქსოვილით და წაუსვით ტყავის სპეციალური კონდიციონერი 6 თვეში ერთხელ. მოარიდეთ მზის პირდაპირ სხივებს და სითბოს წყაროებს. კაკლის კარკასი პერიოდულად უნდა დამუშავდეს სელის ან ტუნგის ზეთით.",
        delTitle: "მიწოდება &amp; დაბრუნება",
        delContent: "Lussoni-ის ყველა ნივთი მზადდება ინდივიდუალური შეკვეთით და იგზავნება 6–8 კვირის ვადაში. ჩვენ გთავაზობთ უფასო პრემიუმ მიწოდებას (White Glove) — ჩვენი გუნდი ამოალაგებს, ააწყობს და დადგამს თქვენს ნივთს, და გაიტანს ყველა შესაფუთ მასალას.<br /><br />რადგან ეს ნივთი მზადდება შეკვეთით, დაბრუნება არ მიიღება, გარდა საწარმოო დეფექტისა, რომელსაც ფარავს ჩვენი 10-წლიანი გარანტია. ინდივიდუალური შეკვეთებისთვის გთხოვთ პირდაპირ დაუკავშირდეთ ჩვენს ატელიეს.",
        relatedEyebrow: "შერჩეული კომბინაციები",
        relatedTitle: "შეავსეთ კომპოზიცია",
        reviewsEyebrow: "კლიენტების გამოხმაურებები",
        reviewsTitle: "შეფასებები",
        reviewsSummary: "47 შეფასების საფუძველზე",
        rev1Text: "„ოსტატობა არაჩვეულებრივია. ექვსი თვის შემდეგ ტყავი უკვე საოცარ ხასიათს იძენს. ამ სავარძელში არაფერია სტანდარტული — ისე გამოიყურება, თითქოს სპეციალურად ჩვენი სახლისთვის შეიქმნა.“",
        rev1Author: "შარლოტ ბ.",
        rev1Loc: "ლონდონი, გაერთიანებული სამეფო",
        rev1Date: "აპრილი 2026",
        rev2Text: "„არაერთი ე.წ. ლუქს ბრენდისგან შემიძენია ავეჯი. Lussoni ნამდვილი შედევრია. Renard-ი ჩემს კაბინეტში დგას და პირველია, რასაც კლიენტები აღნიშნავენ. მიწოდება იყო უნაკლო.“",
        rev2Author: "მატეო რ.",
        rev2Loc: "მილანი, იტალია",
        rev2Date: "მარტი 2026",
        rev3Text: "„ლოდინი ყოველ დღედ ღირდა. ჩვენი სამკითხველო ოთახისთვის სპილოსძვლისფერი სელის ვარიანტი ავირჩიეთ — ქსოვილის ფაქტურა და ხარისხი ნამდვილად გამორჩეულია ამ საფასო კატეგორიაში.“",
        rev3Author: "სოფი ვ.",
        rev3Loc: "პარიზი, საფრანგეთი",
        rev3Date: "იანვარი 2026"
      },

      // Toasts & Messages
      toasts: {
        addedCart: "დაემატა კალათაში.",
        wishlistSaved: "შენახულია თქვენს რჩეულებში.",
        wishlistRemoved: "წაიშალა რჩეულებიდან.",
        newsletterValid: "გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა.",
        newsletterSuccess: "თქვენ სიაში ხართ. კეთილი იყოს თქვენი მობრძანება Lussoni-ში."
      }
    },

    en: {
      // Document metadata
      meta: {
        homeTitle: "Lussoni — Luxury Furniture | Heirlooms for the Modern Home",
        homeDesc: "Lussoni crafts extraordinary furniture for extraordinary spaces. Explore our collections of hand-finished sofas, dining tables, beds, and accent pieces — each a work of art.",
        collectionTitle: "All Collections — Lussoni Luxury Furniture",
        collectionDesc: "Browse the complete Lussoni collection — extraordinary sofas, dining tables, armchairs, beds, shelving, and accent pieces, all handcrafted in Italy.",
        productTitle: "The Renard Armchair — Lussoni",
        productDesc: "The Renard Armchair by Lussoni — full-grain cognac leather with hand-carved walnut frame. Made to order in our Milan atelier. From €3,850."
      },

      // Navigation & Shared UI
      nav: {
        home: "Home",
        collections: "Collections",
        living: "Living",
        dining: "Dining",
        bedroom: "Bedroom",
        atelier: "Atelier",
        searchAria: "Search",
        wishlistAria: "Wishlist",
        cartAria: "Cart",
        menuAria: "Open menu"
      },

      // Common / Actions
      common: {
        explore: "Explore",
        view: "View →",
        quickView: "Quick View",
        new: "New",
        bestseller: "Bestseller",
        scroll: "Scroll",
        viewAll: "View All",
        currency: "€",
        inclVat: "incl. VAT",
        addToCart: "Add to Cart",
        addedToCart: "✓ Added to Cart",
        addToWishlist: "Add to wishlist",
        removeFromWishlist: "Remove from wishlist"
      },

      // Homepage: Hero
      hero: {
        eyebrow: "Est. 1987 — Milano",
        headline: "Where Every Room<br /><em>Tells a Story</em>",
        sub: "Furniture that endures. Crafted for those who demand the extraordinary.",
        ctaExplore: "Explore Collections",
        ctaStory: "Our Story"
      },

      // Homepage: Manifesto
      manifesto: {
        text: "At Lussoni, we believe a home is a portrait of its inhabitants. Each piece we create is an act of devotion — to material, to form, to the artisans whose hands shape what endures across generations."
      },

      // Homepage: Stats Strip
      stats: {
        years: "Years of Craft",
        pieces: "Pieces Created",
        countries: "Countries Delivered",
        awards: "Design Awards"
      },

      // Homepage: Featured Collections
      featured: {
        eyebrow: "Curated Worlds",
        title: "The Collections",
        living: "Living Room",
        dining: "Dining",
        bedroom: "Bedroom"
      },

      // Homepage & Shared: Products
      products: {
        eyebrow: "Most Coveted",
        title: "New Arrivals",
        p1Name: "The Renard Armchair",
        p1Cat: "Seating",
        p1Mat: "Full-grain leather · Walnut",
        p2Name: "The Nuvola Lounge Set",
        p2Cat: "Seating",
        p2Mat: "Bouclé fabric · Solid walnut",
        p3Name: "Calacatta Side Table",
        p3Cat: "Tables",
        p3Mat: "Calacatta marble · Brass",
        p4Name: "Meridian Open Shelving",
        p4Cat: "Storage",
        p4Mat: "Black walnut · Brass fittings",
        p5Name: "Ovale Dining Table",
        p5Cat: "Dining",
        p5Mat: "Solid dark walnut · Brass",
        p6Name: "The Velours Sofa",
        p6Cat: "Seating",
        p6Mat: "Velvet · Solid brass legs",
        p7Name: "The Palazzo Sofa",
        p7Cat: "Seating",
        p7Mat: "Belgian linen · Smoked oak",
        p8Name: "The Imperiale Bed",
        p8Cat: "Bedroom",
        p8Mat: "Charcoal velvet · Solid brass"
      },

      // Homepage: Craftsmanship
      craft: {
        eyebrow: "The Lussoni Atelier",
        title: "The Art of<br /><em>Making</em>",
        body: "Every Lussoni piece begins as a drawing, becomes a conversation between designer and master craftsman, and ends as an heirloom. We use only sustainably sourced hardwoods, hand-tanned leathers, and hardware cast from solid brass — never plated, never rushed.",
        cta: "Discover the Process"
      },

      // Homepage: Materials
      materials: {
        eyebrow: "Material Intelligence",
        title: "Fabric &amp; Form,<br />United",
        body: "From the raw linen of Normandy to the vegetable-tanned leathers of Córdoba, every material at Lussoni is chosen for its character — how it will look not just today, but thirty years from now.",
        pill1: "Linen &amp; Bouclé",
        pill2: "Full-grain Leather",
        pill3: "Black Walnut",
        pill4: "Solid Brass",
        pill5: "Calacatta Marble",
        pill6: "Smoked Oak",
        cta: "Shop By Material"
      },

      // Homepage: Testimonials
      testimonials: {
        t1Text: "The Renard armchair has become the soul of our sitting room. In ten years of collecting furniture, nothing has compared to Lussoni's attention to proportion and finish.",
        t1Author: "Isabelle Fontaine",
        t1Role: "Interior Designer, Paris",
        t2Text: "We furnished our entire penthouse through Lussoni. The quality is unsurpassed — and the experience felt as personal as commissioning a bespoke suit.",
        t2Author: "Marco & Giulia Ferrante",
        t2Role: "Milan",
        t3Text: "What strikes me most about Lussoni is the restraint — nothing is overwrought. Every detail earns its place. It is furniture that respects the room.",
        t3Author: "David Thornton",
        t3Role: "Architectural Digest, New York"
      },

      // Homepage: Newsletter
      newsletter: {
        eyebrow: "Private Access",
        title: "First to Know.<br /><em>Always.</em>",
        sub: "New collections, private viewings, and collector's editions — delivered before anyone else.",
        placeholder: "Your email address",
        subscribe: "Subscribe",
        legal: "By subscribing you agree to our Privacy Policy. Unsubscribe at any time."
      },

      // Homepage: Press
      press: {
        eyebrow: "As seen in"
      },

      // Footer
      footer: {
        tagline: "Extraordinary furniture for extraordinary spaces. Crafted in Italy since 1987.",
        colCollections: "Collections",
        colServices: "Services",
        colCompany: "Company",
        colHelp: "Help",
        livingRoom: "Living Room",
        diningRoom: "Dining Room",
        bedroom: "Bedroom",
        homeOffice: "Home Office",
        outdoor: "Outdoor",
        storage: "Storage",
        newArrivals: "New Arrivals",
        bespoke: "Bespoke Commissions",
        consultation: "Interior Consultation",
        whiteGlove: "White Glove Delivery",
        tradeProgramme: "Trade Programme",
        restoration: "Restoration",
        ourStory: "Our Story",
        atelier: "Atelier",
        press: "Press",
        careers: "Careers",
        contact: "Contact",
        showrooms: "Showrooms",
        deliveryInfo: "Delivery Info",
        copyright: "© 2026 Lussoni S.p.A. All rights reserved.",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
        terms: "Terms of Sale"
      },

      // Collection Page
      collectionPage: {
        eyebrow: "The Complete Range",
        title: "All Collections",
        sub: "Every room. Every story. Every piece, crafted to last a lifetime.",
        tabAll: "All",
        tabSeating: "Seating",
        tabTables: "Tables",
        tabBedroom: "Bedroom",
        tabStorage: "Storage",
        filterTitle: "Filter",
        clearAll: "Clear all",
        priceRange: "Price Range",
        under2k: "Under €2,000",
        p2to4k: "€2,000 – €4,000",
        p4to8k: "€4,000 – €8,000",
        over8k: "€8,000+",
        material: "Material",
        matWalnut: "Black Walnut",
        matLeather: "Full-grain Leather",
        matLinen: "Linen &amp; Bouclé",
        matMarble: "Marble",
        matBrass: "Solid Brass",
        style: "Style",
        styleContemporary: "Contemporary",
        styleClassical: "Classical",
        styleArtDeco: "Art Déco",
        styleMinimal: "Minimal",
        availability: "Availability",
        inStock: "In Stock",
        madeToOrder: "Made to Order",
        showingPrefix: "Showing",
        pieceSingular: "piece",
        piecePlural: "pieces",
        sortFeatured: "Featured",
        sortPriceAsc: "Price: Low to High",
        sortPriceDesc: "Price: High to Low",
        sortNewest: "Newest",
        sortName: "Name A–Z",
        emptyTitle: "No pieces found",
        emptySub: "Try adjusting your filters to explore more of our collection.",
        emptyBtn: "Clear Filters",
        loadMore: "Load More Pieces",
        loading: "Loading…",
        allLoaded: "All pieces loaded",
        noMore: "No more pieces"
      },

      // Product Page
      productPage: {
        categoryEyebrow: "Seating · Made to Order",
        breadcrumbHome: "Home",
        breadcrumbCollections: "Collections",
        breadcrumbSeating: "Seating",
        badgeCraft: "Handcrafted",
        badgeOrigin: "Milano, Italy",
        ratingText: "4.9 (47 reviews)",
        upholsteryLabel: "Upholstery",
        frameLabel: "Frame Finish",
        swatchCognac: "Cognac Leather",
        swatchNoir: "Noir Leather",
        swatchSage: "Sage Bouclé",
        swatchIvory: "Ivory Linen",
        swatchCharcoal: "Charcoal Velvet",
        swatchWalnut: "Oiled Walnut",
        swatchSmoked: "Smoked Oak",
        swatchBrass: "Solid Brass",
        delivery1: "White Glove Delivery — 6–8 weeks",
        delivery2: "Complimentary Installation",
        delivery3: "10-Year Craftsmanship Guarantee",
        descTitle: "Description",
        descContent: "The Renard Armchair is named for its regal posture — a quiet authority expressed through the deep buttoned back and sculptural walnut frame. Upholstered in full-grain vegetable-tanned leather from Córdoba, it develops a rich patina over decades. The joinery is mortise-and-tenon, hand-cut in our Milan atelier, and finished with hand-applied oil.<br /><br />A piece to pass on.",
        specTitle: "Dimensions &amp; Specifications",
        specWidth: "Width",
        specDepth: "Depth",
        specHeight: "Height",
        specSeatHeight: "Seat height",
        specWeight: "Weight",
        specFrame: "Frame",
        specFrameVal: "Solid black walnut",
        specUpholstery: "Upholstery",
        specUpholsteryVal: "Full-grain leather",
        specFilling: "Filling",
        specFillingVal: "High-density foam + down wrap",
        specOrigin: "Origin",
        specOriginVal: "Handmade in Milan, Italy",
        careTitle: "Care &amp; Maintenance",
        careContent: "The leather on the Renard is untreated and will naturally acquire a beautiful patina over time. Clean with a slightly damp cloth and apply a specialist leather conditioner every 6 months. Avoid direct sunlight and heat sources. The walnut frame should be periodically treated with linseed or tung oil to maintain its finish.",
        delTitle: "Delivery &amp; Returns",
        delContent: "All Lussoni pieces are made to order and dispatched within 6–8 weeks. We offer complimentary white glove delivery — our team will unpack, assemble, and position your piece, and remove all packaging.<br /><br />As this piece is made to order, returns are not accepted unless there is a manufacturing defect, which is covered under our 10-year guarantee. For bespoke commissions, please contact our atelier directly.",
        relatedEyebrow: "Curated Pairings",
        relatedTitle: "Complete the Look",
        reviewsEyebrow: "Client Testimonials",
        reviewsTitle: "Reviews",
        reviewsSummary: "Based on 47 reviews",
        rev1Text: "\"The craftsmanship is extraordinary. The leather is already developing a beautiful character after six months. Nothing about this chair feels off-the-shelf — it feels like it was made for our home.\"",
        rev1Author: "Charlotte B.",
        rev1Loc: "London, UK",
        rev1Date: "April 2026",
        rev2Text: "\"I've purchased from many so-called luxury brands. Lussoni is the real thing. The Renard sits in my study and is the first thing clients comment on. Delivery was impeccable.\"",
        rev2Author: "Matteo R.",
        rev2Loc: "Milan, Italy",
        rev2Date: "March 2026",
        rev3Text: "\"The wait was worth every day. We chose the Ivory Linen version for our reading room — the texture and weight of the upholstery is something I've never encountered at this price point.\"",
        rev3Author: "Sophie W.",
        rev3Loc: "Paris, France",
        rev3Date: "January 2026"
      },

      // Toasts & Messages
      toasts: {
        addedCart: "added to cart.",
        wishlistSaved: "saved to your wishlist.",
        wishlistRemoved: "Removed from wishlist.",
        newsletterValid: "Please enter a valid email address.",
        newsletterSuccess: "You're on the list. Welcome to Lussoni."
      }
    }
  };

  /**
   * Deep key lookup in translation dictionary
   */
  function getNestedTranslation(obj, keyPath) {
    if (!obj || !keyPath) return null;
    const parts = keyPath.split('.');
    let curr = obj;
    for (const p of parts) {
      if (curr && typeof curr === 'object' && p in curr) {
        curr = curr[p];
      } else {
        return null;
      }
    }
    return curr;
  }

  /**
   * Get active language from localStorage or default
   */
  function getCurrentLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ka' || stored === 'en') return stored;
    } catch (e) {
      // localStorage may fail in restricted file:// contexts
    }
    return DEFAULT_LANG;
  }

  /**
   * Translate single key for current language
   */
  function t(keyPath, lang) {
    const activeLang = lang || getCurrentLanguage();
    const val = getNestedTranslation(TRANSLATIONS[activeLang], keyPath);
    if (val !== null && val !== undefined) return val;
    // Fallback to Georgian or keyPath
    return getNestedTranslation(TRANSLATIONS[DEFAULT_LANG], keyPath) || keyPath;
  }

  /**
   * Apply translations to the entire DOM
   */
  function applyTranslations(lang) {
    document.documentElement.lang = lang;

    // 1. Text elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.dataset.i18n;
      const text = t(key, lang);
      if (text) {
        if (text.includes('<') && text.includes('>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // 2. Placeholders
    const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderEls.forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const text = t(key, lang);
      if (text) el.setAttribute('placeholder', text);
    });

    // 3. Aria-labels
    const ariaEls = document.querySelectorAll('[data-i18n-aria]');
    ariaEls.forEach(el => {
      const key = el.dataset.i18nAria;
      const text = t(key, lang);
      if (text) el.setAttribute('aria-label', text);
    });

    // 4. Page title & meta description if marked
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const titleText = t(titleEl.dataset.i18n, lang);
      if (titleText) document.title = titleText;
    }

    const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
    if (metaDesc) {
      const descText = t(metaDesc.dataset.i18n, lang);
      if (descText) metaDesc.setAttribute('content', descText);
    }

    // 5. Update language switcher buttons active states
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      const btnLang = btn.dataset.lang;
      const isActive = btnLang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // 6. Dispatch custom event for page-specific JS modules
    window.dispatchEvent(new CustomEvent('lussoni:langchange', { detail: { lang } }));
  }

  /**
   * Switch language and persist
   */
  function setLanguage(lang) {
    if (lang !== 'ka' && lang !== 'en') return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyTranslations(lang);
  }

  /**
   * Attach click events to all language switchers
   */
  function initLanguageSwitchers() {
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.dataset.lang;
        if (targetLang) {
          setLanguage(targetLang);
        }
      });
    });
  }

  // Initialize immediately on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getCurrentLanguage();
    applyTranslations(lang);
    initLanguageSwitchers();
  });

  // Expose API globally
  window.LussoniI18n = {
    t,
    setLanguage,
    getCurrentLanguage,
    translations: TRANSLATIONS
  };
})();
