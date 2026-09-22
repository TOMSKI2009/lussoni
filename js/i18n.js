/**
 * LUSSONI — Internationalization (i18n)
 * Georgian (ქართული - Default) & English (EN)
 * Luxury Bathroom Furniture & Sanctuary Brand
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'lussoni_lang';
  const DEFAULT_LANG = 'ka'; // Georgian is default

  const TRANSLATIONS = {
    ka: {
      // Document metadata
      meta: {
        homeTitle: "Lussoni — ლუქს სააბაზანოს ავეჯი | რელიქვია პირადი სივრცისთვის",
        homeDesc: "Lussoni ქმნის გამორჩეულ სააბაზანოს ავეჯს: ხელნაკეთი მარმარილოს ტუმბოები, განათებული სარკეები, მაღალი კარადები და ექსკლუზიური სანტექნიკა იტალიიდან.",
        collectionTitle: "ყველა კოლექცია — Lussoni ლუქს სააბაზანოს ავეჯი",
        collectionDesc: "დაათვალიერეთ Lussoni-ის სრული კოლექცია — გამორჩეული პირსაბანის ტუმბოები, სარკეები, კარადები და აქსესუარები, შექმნილი მილანის ატელიეში.",
        productTitle: "ორმაგი ტუმბო Renard — Lussoni სააბაზანოს ავეჯი",
        productDesc: "ორმაგი ტუმბო Renard Lussoni-ისგან — Calacatta Viola მარმარილოს ზედაპირი და ხელით ნაკვეთი კაკლის კარკასი. მზადდება შეკვეთით მილანის ატელიეში. €5,850-დან."
      },

      // Navigation & Shared UI
      nav: {
        home: "მთავარი",
        collections: "კოლექციები",
        living: "ტუმბოები",
        dining: "სარკეები",
        bedroom: "კარადები",
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
        new: "ახალი კოლექცია",
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
        headline: "სადაც სააბაზანო<br /><em>საკურთხევლად იქცევა</em>",
        sub: "სააბაზანოს პრემიუმ ავეჯი და სანტექნიკური ხელოვნება, რომელიც დროს უძლებს. შექმნილი მათთვის, ვისთვისაც პირადი სივრცე ხელოვნებაა.",
        ctaExplore: "კოლექციის დათვალიერება",
        ctaStory: "ჩვენი ისტორია"
      },

      // Homepage: Manifesto
      manifesto: {
        text: "Lussoni-ში გვწამს, რომ სააბაზანო სახლის ყველაზე ინტიმური საკურთხეველია — ადგილი, სადაც ყოველი დღე იწყება და სრულდება. ყოველი პირსაბანის ტუმბო, მარმარილოს ზედაპირი და განათებული სარკე, რომელსაც ვქმნით, არის ერთგულების გამოხატულება მასალის, წყლისა და იმ იტალიელი ოსტატების მიმართ, რომელთა ხელებიც ქმნიან თაობებისთვის განკუთვნილ რელიქვიებს."
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
        living: "პირსაბანის ტუმბოები",
        dining: "სარკეები & განათება",
        bedroom: "კარადები & სათავსოები"
      },

      // Homepage & Shared: Products
      products: {
        eyebrow: "რჩეული ნამუშევრები",
        title: "ახალი კოლექცია",
        p1Name: "ორმაგი ტუმბო Renard",
        p1Cat: "ტუმბოები",
        p1Mat: "Calacatta Viola მარმარილო · დაზეთილი კაკალი",
        p2Name: "დაკიდებული ტუმბო Nuvola",
        p2Cat: "ტუმბოები",
        p2Mat: "მუხა · შავი ქვის პირსაბანები · თითბერი",
        p3Name: "განათებული სარკე Aura",
        p3Cat: "სარკეები",
        p3Mat: "პერიმეტრული LED · მასიური თითბერი",
        p4Name: "მაღალი კარადა Meridian",
        p4Cat: "კარადები",
        p4Mat: "შავი მარმარილო · თითბერის კარკასი",
        p5Name: "ორმაგი ტუმბო Verona",
        p5Cat: "ტუმბოები",
        p5Mat: "ნაცრისფერი მარმარილო · ორნამენტული ხე",
        p6Name: "მინიმალისტური სარკე Imperiale",
        p6Cat: "სარკეები",
        p6Mat: "თბილი განათება · ნისლგამძლე მინა",
        p7Name: "მონოლითური აბაზანა Palazzo",
        p7Cat: "სანტექნიკა",
        p7Mat: "Nero Marquina მარმარილო · თითბერი",
        p8Name: "სააბაზანოს ეტაჟერკა Soleil",
        p8Cat: "კარადები",
        p8Mat: "მასიური თითბერი · მარმარილოს თაროები"
      },

      // Homepage: Craftsmanship
      craft: {
        eyebrow: "Lussoni-ის ატელიე",
        title: "სააბაზანოს<br /><em>ხელოვნება</em>",
        body: "Lussoni-ის ყოველი სააბაზანოს ავეჯი იწყება მონოლითური მარმარილოს შერჩევით იტალიის კარიერებში. ჩვენი ოსტატები ხელით ამუშავებენ წყალგამძლე შავ კაკალს, ჩამოასხამენ მასიურ თითბერს და მილიმეტრის სიზუსტით აერთებენ ქვის ფილებს. არასდროს შპონი, არასდროს მოოქროვილი საფარი — მხოლოდ ნამდვილი, საუკუნოვანი მასალები, რომლებიც ტენიან გარემოში ათწლეულების მანძილზე ინარჩუნებენ უნაკლო სილამაზეს.",
        cta: "პროცესის გაცნობა"
      },

      // Homepage: Materials
      materials: {
        eyebrow: "მასალის ინტელექტი",
        title: "მარმარილო & კაკალი,<br />გაერთიანებული",
        body: "კარარასა და ვერონას უიშვიათესი მარმარილოს კარიერებიდან დაწყებული ათწლეულობით გამომშრალი წყალგამძლე კაკლით დამთავრებული, Lussoni-ში ყოველი მასალა ირჩევა წყალთან და ორთქლთან იდეალური ჰარმონიისთვის — ისე, რომ ოცდაათი წლის შემდეგაც ისეთივე შთამბეჭდავი იყოს, როგორც მონტაჟის პირველ დღეს.",
        pill1: "Calacatta Viola მარმარილო",
        pill2: "Nero Marquina მარმარილო",
        pill3: "დაზეთილი შავი კაკალი",
        pill4: "მასიური არქიტექტურული თითბერი",
        pill5: "შებოლილი მუხა",
        pill6: "ნისლგამძლე ოპტიკური მინა",
        cta: "მასალის მიხედვით შერჩევა"
      },

      // Homepage: Testimonials
      testimonials: {
        t1Text: "ორმაგი ტუმბო Renard ჩვენი პენტჰაუსის სააბაზანოს ცენტრი გახდა. Calacatta Viola-ს მარმარილოს ზედაპირი და ხის ფაქტურა უბრალოდ ხელოვნების ნიმუშია — წყლისა და ტენიანობისადმი დაცულობა კი უმაღლეს დონეზეა გადაწყვეტილი.",
        t1Author: "იზაბელ ფონტენი",
        t1Role: "ინტერიერის არქიტექტორი, პარიზი",
        t2Text: "მთელი სააბაზანო კომპლექსი Lussoni-ის ავეჯით მოვაწყვეთ: ტუმბო, განათებული სარკეები და მაღალი კარადები. იტალიური ოსტატობის დონე შეუდარებელია — პროცესი ისეთივე პერსონალური იყო, როგორც ინდივიდუალური კოსტიუმის შეკერვა.",
        t2Author: "მარკო და ჯულია ფერანტე",
        t2Role: "მილანი",
        t3Text: "რაც Lussoni-ს სააბაზანოს ავეჯში ყველაზე მეტად მხიბლავს, არის თავშეკავება და პროპორცია — მასიური თითბერის დეტალები და მარმარილოს სიღრმე სივრცეს სიმშვიდეს ანიჭებს. ეს არის ავეჯი, რომელიც პატივს სცემს რიტუალს.",
        t3Author: "დევიდ თორნტონი",
        t3Role: "Architectural Digest, ნიუ-იორკი"
      },

      // Homepage: Newsletter
      newsletter: {
        eyebrow: "ექსკლუზიური წვდომა",
        title: "გაიგეთ პირველმა.<br /><em>ყოველთვის.</em>",
        sub: "ახალი სააბაზანო კოლექციები, დახურული ჩვენებები და საკოლექციო გამოცემები — ყველაზე ადრე თქვენთან.",
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
        tagline: "ექსკლუზიური სააბაზანოს ავეჯი და სანტექნიკური ხელოვნება. დამზადებულია იტალიაში 1987 წლიდან.",
        colCollections: "კოლექციები",
        colServices: "სერვისები",
        colCompany: "კომპანია",
        colHelp: "დახმარება",
        livingRoom: "პირსაბანის ტუმბოები",
        diningRoom: "სარკეები & განათება",
        bedroom: "კარადები & სათავსოები",
        homeOffice: "კედლის კონსოლები",
        outdoor: "მონოლითური აბაზანები",
        storage: "სანტექნიკა & აქსესუარები",
        newArrivals: "ახალი კოლექცია",
        bespoke: "ინდივიდუალური ზომები",
        consultation: "დიზაინერის კონსულტაცია",
        whiteGlove: "პრემიუმ მიწოდება & მონტაჟი",
        tradeProgramme: "არქიტექტორთა პროგრამა",
        restoration: "მარმარილოს მოვლა & რესტავრაცია",
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
        sub: "სააბაზანოს რელიქვიები. შექმნილი წყალთან ჰარმონიისთვის, თაობებისთვის.",
        tabAll: "ყველა",
        tabSeating: "ტუმბოები",
        tabTables: "სარკეები",
        tabBedroom: "კარადები",
        tabStorage: "სანტექნიკა",
        filterTitle: "ფილტრი",
        clearAll: "გასუფთავება",
        priceRange: "ფასის დიაპაზონი",
        under2k: "€2,000-მდე",
        p2to4k: "€2,000 – €4,000",
        p4to8k: "€4,000 – €8,000",
        over8k: "€8,000+",
        material: "მასალა",
        matWalnut: "დაზეთილი კაკალი",
        matLeather: "Calacatta მარმარილო",
        matLinen: "Nero Marquina მარმარილო",
        matMarble: "ბუნებრივი ქვა",
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
        categoryEyebrow: "პირსაბანის ტუმბოები · მზადდება შეკვეთით",
        breadcrumbHome: "მთავარი",
        breadcrumbCollections: "კოლექციები",
        breadcrumbSeating: "ტუმბოები",
        badgeCraft: "ხელნაკეთი",
        badgeOrigin: "მილანი, იტალია",
        ratingText: "4.9 (47 შეფასება)",
        upholsteryLabel: "მარმარილოს ზედაპირი",
        frameLabel: "კარადის ხე & საფარი",
        swatchCognac: "Calacatta Viola მარმარილო",
        swatchNoir: "Nero Marquina მარმარილო",
        swatchSage: "Statuario თეთრი მარმარილო",
        swatchIvory: "Verde Alpi მწვანე მარმარილო",
        swatchCharcoal: "Pietra Grey ნაცრისფერი მარმარილო",
        swatchWalnut: "დაზეთილი შავი კაკალი",
        swatchSmoked: "შებოლილი მუხა",
        swatchBrass: "მქრქალი ანთრაციტის ლაქი",
        delivery1: "პრემიუმ მიწოდება (White Glove) — 6–8 კვირა",
        delivery2: "უფასო აწყობა და სანტექნიკური მორგება",
        delivery3: "ოსტატობის 10-წლიანი გარანტია",
        descTitle: "აღწერა",
        descContent: "ორმაგი ტუმბო Renard-ი შექმნილია როგორც სააბაზანო სივრცის მონუმენტური არქიტექტურული ცენტრი. ზედაპირი გამოკვეთილია 30მმ სისქის იტალიური Calacatta Viola მარმარილოს ერთიანი ბლოკისგან, რომელსაც ავსებს ორი ინტეგრირებული მარმარილოს პირსაბანი და თითბერის სანიაღვრე დეტალები. კარადა დამზადებულია ხელით ნაკვეთი ვერტიკალური კაკლის კანელურებით (fluting), აღჭურვილია Blum-ის რბილად დამხურავი უჯრებით და დამუშავებულია ეკოლოგიური წყალგამძლე ზეთებით.<br /><br />რელიქვია თქვენი სააბაზანო საკურთხევლისთვის.",
        specTitle: "ზომები & სპეციფიკაციები",
        specWidth: "სიგანე",
        specDepth: "სიღრმე",
        specHeight: "სიმაღლე",
        specSeatHeight: "პირსაბანის სიღრმე",
        specWeight: "წონა",
        specFrame: "კარადის მასალა",
        specFrameVal: "მასიური ამერიკული შავი კაკალი (ტენგამძლე)",
        specUpholstery: "ზედაპირი",
        specUpholsteryVal: "Calacatta Viola ბუნებრივი მარმარილო (30მმ)",
        specFilling: "ფურნიტურა",
        specFillingVal: "მასიური თითბერი + Blum Soft-Close",
        specOrigin: "წარმოშობა",
        specOriginVal: "ხელნაკეთი მილანში, იტალია",
        careTitle: "მოვლა & ექსპლუატაცია",
        careContent: "Calacatta Viola მარმარილო ქარხნულად გაჟღენთილია ჰიდროფობიური დამცავი ფენით. ყოველდღიური მოვლისთვის გამოიყენეთ რბილი ქსოვილი და ნეიტრალური pH საწმენდი საშუალებები. მოერიდეთ მჟავე და აბრაზიულ ხსნარებს. კაკლის კანელურები წელიწადში ერთხელ შეგიძლიათ განაახლოთ ბუნებრივი მინერალური ან ტუნგის ზეთით.",
        delTitle: "მიწოდება & მონტაჟი",
        delContent: "Lussoni-ის სააბაზანოს ყველა ნივთი მზადდება ინდივიდუალური შეკვეთით და იგზავნება 6–8 კვირის ვადაში. ჩვენ გთავაზობთ უფასო პრემიუმ White Glove მიწოდებას — ჩვენი სპეციალიზებული ჯგუფი უსაფრთხოდ ამოალაგებს, მოარგებს ადგილზე და მოამზადებს ტუმბოს სანტექნიკური შეერთებისთვის.<br /><br />საწარმოო დეფექტებს სრულად ფარავს ჩვენი 10-წლიანი საგარანტიო პროგრამა.",
        relatedEyebrow: "შერჩეული კომბინაციები",
        relatedTitle: "შეავსეთ კომპოზიცია",
        reviewsEyebrow: "არქიტექტორთა გამოხმაურებები",
        reviewsTitle: "შეფასებები",
        reviewsSummary: "47 შეფასების საფუძველზე",
        rev1Text: "„ოსტატობა არაჩვეულებრივია. Calacatta Viola მარმარილოს ძარღვები და კაკლის კანელურები ისე ჰარმონიულად ერწყმის ერთმანეთს, თითქოს სპეციალურად ჩვენი ვილისთვის შეიქმნა. წყლისადმი გამძლეობა იდეალურია.“",
        rev1Author: "შარლოტ ბ.",
        rev1Loc: "ლონდონი, გაერთიანებული სამეფო",
        rev1Date: "აპრილი 2026",
        rev2Text: "„ჩემს არქიტექტურულ პროექტებში ხშირად ვიყენებ ევროპულ ლუქს ბრენდებს. Lussoni-ის Renard ტუმბო ნამდვილი შედევრია. კლიენტი აღფრთოვანებულია ყოველი დეტალით.“",
        rev2Author: "მატეო რ.",
        rev2Loc: "მილანი, იტალია",
        rev2Date: "მარტი 2026",
        rev3Text: "„ლოდინი ყოველ დღედ ღირდა. მარმარილოს სისქე, თითბერის სიმძიმე და უჯრების ჩუმი სვლა უმაღლესი ხარისხისაა. ეს ავეჯი სააბაზანოს სპა-საკურთხევლად აქცევს.“",
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
        homeTitle: "Lussoni — Luxury Bathroom Furniture | Heirlooms for the Bath Sanctuary",
        homeDesc: "Lussoni crafts extraordinary bathroom furniture for private sanctuaries: bespoke marble vanities, illuminated mirrors, tall storage columns, and artisanal fixtures from Italy.",
        collectionTitle: "All Collections — Lussoni Luxury Bathroom Furniture",
        collectionDesc: "Browse the complete Lussoni collection — architectural bathroom vanities, illuminated mirrors, storage cabinets, and basins, all handcrafted in Milan, Italy.",
        productTitle: "The Renard Double Vanity — Lussoni Bathroom Furniture",
        productDesc: "The Renard Double Vanity by Lussoni — honed Calacatta Viola marble with hand-fluted American walnut cabinetry. Made to order in our Milan atelier. From €5,850."
      },

      // Navigation & Shared UI
      nav: {
        home: "Home",
        collections: "Collections",
        living: "Vanities",
        dining: "Mirrors",
        bedroom: "Cabinets",
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
        new: "New Collection",
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
        headline: "Where the Bath<br /><em>Becomes a Sanctuary</em>",
        sub: "Architectural bathroom furniture and fixtures that endure. Crafted for those who treat personal space as an art form.",
        ctaExplore: "Explore Collections",
        ctaStory: "Our Story"
      },

      // Homepage: Manifesto
      manifesto: {
        text: "At Lussoni, we believe the bathroom is the home's most intimate sanctuary — the quiet space where every day begins and ends. Each vanity, marble basin, and illuminated mirror we craft is an act of devotion to material, to water, and to the Italian master artisans whose hands shape what endures across generations."
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
        living: "Vanities & Consoles",
        dining: "Mirrors & Lighting",
        bedroom: "Cabinets & Storage"
      },

      // Homepage & Shared: Products
      products: {
        eyebrow: "Most Coveted",
        title: "New Arrivals",
        p1Name: "The Renard Double Vanity",
        p1Cat: "Vanities",
        p1Mat: "Calacatta Viola Marble · Oiled Walnut",
        p2Name: "The Nuvola Floating Vanity",
        p2Cat: "Vanities",
        p2Mat: "Smoked Oak · Black Stone Basins · Brass",
        p3Name: "Aura Illuminated Mirror",
        p3Cat: "Mirrors",
        p3Mat: "Perimeter Halo LED · Solid Brass",
        p4Name: "Meridian Tall Column Cabinet",
        p4Cat: "Cabinets",
        p4Mat: "Black Marble · Solid Brass Frame",
        p5Name: "Verona Luxury Double Vanity",
        p5Cat: "Vanities",
        p5Mat: "Striated Grey Marble · Carved Oak",
        p6Name: "Imperiale Backlit Mirror",
        p6Cat: "Mirrors",
        p6Mat: "Warm Backlight · Anti-fog Glass",
        p7Name: "Palazzo Monolithic Bath Suite",
        p7Cat: "Sanctuary Fixtures",
        p7Mat: "Nero Marquina Marble · Solid Brass",
        p8Name: "Soleil Bathroom Etagere",
        p8Cat: "Cabinets",
        p8Mat: "Solid Architectural Brass · Marble"
      },

      // Homepage: Craftsmanship
      craft: {
        eyebrow: "The Lussoni Atelier",
        title: "The Art of the<br /><em>Bath Sanctuary</em>",
        body: "Every Lussoni bathroom piece begins with the hand-selection of stone slabs from Italian quarries. Our master artisans carve moisture-sealed Canaletto walnut, cast solid architectural brass, and precision-join bookmatched marble down to the millimeter. Never veneer, never electroplated finishes — only authentic, noble materials crafted to flourish in humid environments across generations.",
        cta: "Discover the Process"
      },

      // Homepage: Materials
      materials: {
        eyebrow: "Material Intelligence",
        title: "Stone & Timber,<br />United",
        body: "From rare quarries in Carrara and Verona to decades-cured water-resilient walnut, every material at Lussoni is chosen for its eternal dialogue with water and steam — ensuring that thirty years from now, it remains as breathtaking as the day of installation.",
        pill1: "Calacatta Viola Marble",
        pill2: "Nero Marquina Marble",
        pill3: "Oiled Black Walnut",
        pill4: "Solid Architectural Brass",
        pill5: "Smoked Oak",
        pill6: "Anti-fog Optical Glass",
        cta: "Explore Materials"
      },

      // Homepage: Testimonials
      testimonials: {
        t1Text: "The Renard double vanity has transformed our master bath into a 5-star sanctuary. The Calacatta Viola marble and fluted walnut are museum-grade — and the moisture engineering is flawless.",
        t1Author: "Isabelle Fontaine",
        t1Role: "Interior Architect, Paris",
        t2Text: "We appointed our entire master bathroom suite with Lussoni: vanity, halo mirrors, and storage columns. The level of Italian craftsmanship is unrivaled — and the experience felt as personal as commissioning a bespoke suit.",
        t2Author: "Marco & Giulia Ferrante",
        t2Role: "Milan",
        t3Text: "What strikes me most about Lussoni bathroom furniture is the restraint — the solid brass detailing and depth of marble instill profound calm in the space. It is furniture that honors the morning ritual.",
        t3Author: "David Thornton",
        t3Role: "Architectural Digest, New York"
      },

      // Homepage: Newsletter
      newsletter: {
        eyebrow: "Private Access",
        title: "First to Know.<br /><em>Always.</em>",
        sub: "New bathroom collections, private viewings, and collector's editions — delivered before anyone else.",
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
        tagline: "Extraordinary bathroom furniture and architectural fixtures. Crafted in Italy since 1987.",
        colCollections: "Collections",
        colServices: "Services",
        colCompany: "Company",
        colHelp: "Help",
        livingRoom: "Vanities & Consoles",
        diningRoom: "Mirrors & Lighting",
        bedroom: "Cabinets & Storage",
        homeOffice: "Wall Consoles",
        outdoor: "Monolithic Basins",
        storage: "Sanctuary Fixtures",
        newArrivals: "New Arrivals",
        bespoke: "Bespoke Dimensions",
        consultation: "Architectural Consultation",
        whiteGlove: "White Glove Delivery & Installation",
        tradeProgramme: "Trade & Architect Programme",
        restoration: "Marble Care & Restoration",
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
        sub: "Bathroom heirlooms. Crafted for harmony with water, built to endure for generations.",
        tabAll: "All",
        tabSeating: "Vanities",
        tabTables: "Mirrors",
        tabBedroom: "Cabinets",
        tabStorage: "Basins & Fixtures",
        filterTitle: "Filter",
        clearAll: "Clear all",
        priceRange: "Price Range",
        under2k: "Under €2,000",
        p2to4k: "€2,000 – €4,000",
        p4to8k: "€4,000 – €8,000",
        over8k: "€8,000+",
        material: "Material",
        matWalnut: "Oiled Walnut",
        matLeather: "Calacatta Marble",
        matLinen: "Nero Marquina Marble",
        matMarble: "Natural Stone",
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
        categoryEyebrow: "Vanities · Made to Order",
        breadcrumbHome: "Home",
        breadcrumbCollections: "Collections",
        breadcrumbSeating: "Vanities",
        badgeCraft: "Handcrafted",
        badgeOrigin: "Milano, Italy",
        ratingText: "4.9 (47 reviews)",
        upholsteryLabel: "Countertop Marble",
        frameLabel: "Cabinetry Finish",
        swatchCognac: "Calacatta Viola Marble",
        swatchNoir: "Nero Marquina Marble",
        swatchSage: "Statuario White Marble",
        swatchIvory: "Verde Alpi Marble",
        swatchCharcoal: "Pietra Grey Marble",
        swatchWalnut: "Oiled Black Walnut",
        swatchSmoked: "Smoked Oak",
        swatchBrass: "Matte Charcoal Lacquer",
        delivery1: "White Glove Delivery — 6–8 weeks",
        delivery2: "Complimentary Installation & Fitting",
        delivery3: "10-Year Craftsmanship Guarantee",
        descTitle: "Description",
        descContent: "The Renard Double Vanity stands as the monumental architectural anchor of the luxury bath sanctuary. Its monolithic countertop is carved from a solid 30mm slab of Italian Calacatta Viola marble, featuring two seamlessly undermounted marble basins and solid brass drain fixtures. The cabinetry features hand-fluted solid American walnut detailing, Blum soft-close slide mechanics, and marine-grade moisture sealants.<br /><br />An heirloom for the bath sanctuary.",
        specTitle: "Dimensions & Specifications",
        specWidth: "Width",
        specDepth: "Depth",
        specHeight: "Height",
        specSeatHeight: "Basin depth",
        specWeight: "Weight",
        specFrame: "Cabinetry",
        specFrameVal: "Solid American black walnut (hydro-sealed)",
        specUpholstery: "Countertop",
        specUpholsteryVal: "Honed Calacatta Viola marble (30mm)",
        specFilling: "Hardware",
        specFillingVal: "Solid cast brass + Blum Soft-Close",
        specOrigin: "Origin",
        specOriginVal: "Handmade in Milan, Italy",
        careTitle: "Care & Maintenance",
        careContent: "The Calacatta Viola marble is treated with a specialized penetrating hydrophobic sealer. For daily care, wipe clean with a soft microfiber cloth and pH-neutral stone cleanser. Avoid acidic or abrasive detergents. The fluted walnut cabinetry may be refreshed annually with natural mineral or tung oil.",
        delTitle: "Delivery & Installation",
        delContent: "All Lussoni bathroom pieces are made to order and dispatched within 6–8 weeks. We offer complimentary white-glove delivery — our specialized team unpacks, positions, and prepares the vanity for plumbing connections.<br /><br />Every piece is covered by our 10-year craftsmanship warranty.",
        relatedEyebrow: "Curated Pairings",
        relatedTitle: "Complete the Sanctuary",
        reviewsEyebrow: "Architect & Client Reviews",
        reviewsTitle: "Reviews",
        reviewsSummary: "Based on 47 reviews",
        rev1Text: "\"The craftsmanship is extraordinary. The veining of the Calacatta Viola and the fluted walnut harmonize so naturally — it feels custom-commissioned for our villa. The water resistance is flawless.\"",
        rev1Author: "Charlotte B.",
        rev1Loc: "London, UK",
        rev1Date: "April 2026",
        rev2Text: "\"I specify high-end bathroom furniture across Europe. Lussoni's Renard vanity is a masterclass in proportion and stone joinery. My clients are completely captivated.\"",
        rev2Author: "Matteo R.",
        rev2Loc: "Milan, Italy",
        rev2Date: "March 2026",
        rev3Text: "\"The wait was worth every single day. The weight of the stone, the solid brass pulls, and the silent glide of the drawers represent true luxury. It transforms the bath into a true spa.\"",
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
        if ((text.includes('<') && text.includes('>')) || text.includes('&amp;') || text.includes('&nbsp;')) {
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
