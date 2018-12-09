// Add here your javascript code

const search = instantsearch({
  appId: 'NWXREDUZMP',
  apiKey: '334c4694e2a4317f04a3ddce2403a851a',
  indexName: 'test_anderson',
  urlSync: true
});

search.start();

const search = instantsearch(options);

  // initialize RefinementList
  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list',
      attributeName: 'category'
    })
  );

  // initialize SearchBox
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search for products'
    })
  );

  // initialize hits widget
  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits'
    })
  );

  search.start();










