// Modal css transitions problem

export { ArticlePageGreetingAsync as ArticlePageGreeting } from './ui/ArticlePageGreeting/ArticlePageGreeting.async';
// with timeout work 100%, without bundle.src_features_ArticlePageGreeting_ui_ArticlePageGreeting_ArticlePageGreeting_tsx
// comes last also

// export { ArticlePageGreeting } from './ui/ArticlePageGreeting/ArticlePageGreeting'; // Modal css transitions don't
// work, all come in ArticlePage bundle

// import ArticlePageGreeting from './ui/ArticlePageGreeting/ArticlePageGreeting';
//
// export { ArticlePageGreeting }; // default export (without splitting), strange - work, someth cash related
export { CreateGreeting } from './ui/CreateGreeting/CreateGreeting';
