# ui--browser--semantic

UI library targeting the browser for displaying semantic data. This is not for rendering semantic data on a website.

https://github.com/rappstack/domain--server has a jsonld module to render semantic data.

## References

### Google Supported Types

https://support.google.com/webmasters/answer/7445569?hl=en#zippy=%2Csupported-types

- [Article](https://developers.google.com/search/docs/appearance/structured-data/article)
  - Article
  - NewsArticle
  - BlogPosting
- [Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
  - BreadcrumbList
- [Carousel](https://developers.google.com/search/docs/appearance/structured-data/carousel)
  - ItemList
- [Course list item](https://developers.google.com/search/docs/appearance/structured-data/course)
  - Course
- [Course info](https://developers.google.com/search/docs/appearance/structured-data/course-info)
  - Course
  - CourseInstance
- [Discussion forum](https://developers.google.com/search/docs/appearance/structured-data/discussion-forum)
  - DiscussionForumPosting
- [Dataset](https://developers.google.com/search/docs/appearance/structured-data/dataset)
  - Dataset
  - DataCatalog
  - DataDownload
- [Education Q&A](https://developers.google.com/search/docs/appearance/structured-data/qapage)
  - QAPage
- [Employer aggregate rating](https://developers.google.com/search/docs/appearance/structured-data/employer-rating)
  - EmployerAggregateRating
- [Estimated salary](https://developers.google.com/search/docs/appearance/structured-data/estimated-salary)
  - Occupation
- [Event](https://developers.google.com/search/docs/appearance/structured-data/event)
  - Event
- [FAQ](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
  - FAQPage
  - Question
  - Answer
- [Fact check](https://developers.google.com/search/docs/appearance/structured-data/factcheck)
  - ClaimReview
- [Image metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata)
- [Job posting](https://developers.google.com/search/docs/appearance/structured-data/job-posting)
  - JobPosting
- [Learning video](https://developers.google.com/search/docs/appearance/structured-data/learning-video)
  - LearningResource
  - VideoObject
  - Clip
- [Local business](https://developers.google.com/search/docs/appearance/structured-data/local-business)
  - LocalBusiness
- [Math solvers](https://developers.google.com/search/docs/appearance/structured-data/math-solvers)
  - MathSolver
- [Movie](https://developers.google.com/search/docs/appearance/structured-data/movie)
  - Movie
- [Merchant listings](https://developers.google.com/search/docs/appearance/structured-data/product#merchant-listing_product)
  - Product
  - Review
  - Offer
- [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
  - Organization
- [Paywalled content](https://developers.google.com/search/docs/appearance/structured-data/paywalled-content)
  - CreativeWork
- [Practice Problems](https://developers.google.com/search/docs/appearance/structured-data/practice-probl5ems)
  - Quiz
- [Product snippet](https://developers.google.com/search/docs/appearance/structured-data/product)
  - Product
  - Review
  - Offer
- [Profile page](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
  - ProfilePage
- [Q&A page](https://developers.google.com/search/docs/appearance/structured-data/qapage)
  - QAPage
- [Recipe](https://developers.google.com/search/docs/appearance/structured-data/recipe)
  - Recipe
  - HowTo
  - ItemList
- [Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
  - Review
  - AggregateRating
- [Sitelinks searchbox](https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox)
  - WebSite
- [Software app](https://developers.google.com/search/docs/appearance/structured-data/software-app)
  - SoftwareApplication
- [Special Announcement](https://developers.google.com/search/docs/appearance/structured-data/special-announcements)
  - SpecialAnnouncement
- [Subscribed Content](https://support.google.com/news/publisher-center/answer/13062093)
- [Vacation rental](https://developers.google.com/search/docs/appearance/structured-data/vacation-rental)
  - VacationRental
- [Vehicle listing](https://developers.google.com/search/docs/appearance/structured-data/vehicle-listing)
  - Car
- [Video](https://developers.google.com/search/docs/appearance/structured-data/video)
  - VideoObject
  - Clip
  - BroadcastEvent 

#### From "Semantic Web for Hugo" Project

See https://github.com/Baseflow/HugoStructuredData

- Organization ([Schema.org Type](https://schema.org/Organization))
  - Thing > Organization
- Person ([Schema.org Type](https://schema.org/Person))
  - Thing > Person
- WebContent ([Schema.org Type](https://schema.org/WebContent))
  - Thing > CreativeWork > WebContent
- WebSite ([Schema.org Type](https://schema.org/WebSite))
  - Thing > CreativeWork > WebSite
- WebPage ([Schema.org Type](https://schema.org/WebPage))
  - Thing > CreativeWork > WebPage
- Article ([Schema.org Type](https://schema.org/Article))
  - Thing > CreativeWork > Article
- BlogPosting ([Schema.org Type](https://schema.org/BlogPosting))
  - Thing > CreativeWork > Article > SocialMediaPosting > BlogPosting
- ImageObject ([Schema.org Type](https://schema.org/ImageObject))
  - Thing > CreativeWork > MediaObject > ImageObject
- VideoObject ([Schema.org Type](https://schema.org/VideoObject))
  - Thing > CreativeWork > MediaObject > VideoObject

#### HowTo

- HowTo - [Schema.org Type](https://schema.org/HowTo))
  - Thing > CreativeWork > HowTo
- HowToSection ([Schema.org](https://schema.org/HowToSection))
  - Thing > CreativeWork > HowToSection
  - Thing > Intangible > ItemList > HowToSection
  - Thing > Intangible > ListItem > HowToSection
- HowToTip ([Schema.org](https://schema.org/HowToTip))
  - Thing > CreativeWork > HowToTip
  - Thing > Intangible > ListItem > HowToTip
- HowToStep ([Schema.org](https://schema.org/HowToStep))
  - Thing > CreativeWork > HowToStep
  - Thing > Intangible > ItemList > HowToStep
  - Thing > Intangible > ListItem > HowToStep
- ListItem ([Schema.org](https://schema.org/ListItem))
  - Thing > Intangible > ListItem

#### Review

- Review ([Schema.org Type](https://schema.org/Review))
  - Thing > CreativeWork > Review
- CriticReview ([Schema.org Type](https://schema.org/CriticReview))
  - Thing > CreativeWork > Review > CriticReview
- TVSeason ([Schema.org Type](https://schema.org/TVSeason))
  - Thing > CreativeWork > TVSeason
  - Thing > CreativeWork > CreativeWorkSeason > TVSeason
- TVSeries ([Schema.org Type](https://schema.org/TVSeries))
  - Thing > CreativeWork > TVSeries
  - Thing > CreativeWork > CreativeWorkSeries > TVSeries
  - Thing > Intangible > Series > CreativeWorkSeries > TVSeries
- Movie ([Schema.org Type](https://schema.org/Movie))
  - Thing > CreativeWork > Movie
- Book ([Schema.org Type](https://schema.org/Book))
  - Thing > CreativeWork > Book

#### Other Types

- ItemList ([Schema.org](https://schema.org/ItemList))
  - Thing > Intangible > ItemList
- BreadcrumbList ([Schema.org Type](https://schema.org/BreadcrumbList))
  - Thing > Intangible > ItemList > BreadcrumbList


#### Food and drinks

- Menu ([Schema.org Type](https://schema.org/Menu))
  - Thing > CreativeWork > Menu
- MenuItem ([Schema.org Type](https://schema.org/MenuItem))
  - Thing > Intangible > MenuItem
- Recipe ([Schema.org](https://schema.org/Recipe))
  - Thing > CreativeWork > HowTo > Recipe
- NutritionInformation  ([Schema.org](https://schema.org/NutritionInformation))
  - Thing > Intangible > StructuredValue > NutritionInformation

##### FAQ types

- FAQPage ([Schema.org](https://schema.org/FAQPage))
  - Thing > CreativeWork > WebPage > FAQPage
- QAPage ([Schema.org](https://schema.org/QAPage))
  - Thing > CreativeWork > WebPage > QAPage

#### See Also

https://codeberg.org/yelosan/hugo-semantic-web

https://github.com/JayHoltslander/Structured-Data-JSON-LD
