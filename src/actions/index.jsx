export function selectSomething(something) {
  // selectTasklist is an ActionCreateor, it needs to return an
  // action, an object with a type property.
  return {
    type: 'SOMETHING_SELECTED',
    payload: something,
  };
}

