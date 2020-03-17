it('flex_justify_content', () => {
  function setStyle(dom, object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        dom.style[key] = object[key];
      }
    }
  }

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: row, '));
    document.body.appendChild(document.createTextNode('justify-content: flex-start'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '100px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: row, '));
    document.body.appendChild(document.createTextNode('justify-content: flex-end'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '100px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: row, '));
    document.body.appendChild(document.createTextNode('justify-content: center'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '100px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'row',
      justifyContent: 'center',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: row, '));
    document.body.appendChild(document.createTextNode('justify-content: space-around'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '100px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'row',
      justifyContent: 'space-around',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: row, '));
    document.body.appendChild(document.createTextNode('justify-content: space-between'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '100px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'row',
      justifyContent: 'space-between',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());


  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: column, '));
    document.body.appendChild(document.createTextNode('justify-content: flex-start'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '200px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: column, '));
    document.body.appendChild(document.createTextNode('justify-content: flex-end'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '200px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: column, '));
    document.body.appendChild(document.createTextNode('justify-content: center'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '200px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'column',
      justifyContent: 'center',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: column, '));
    document.body.appendChild(document.createTextNode('justify-content: space-around'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '200px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'column',
      justifyContent: 'space-around',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());

  (function() {
    document.body.appendChild(document.createTextNode('flex-direction: column, '));
    document.body.appendChild(document.createTextNode('justify-content: space-between'));
    const container = document.createElement('div');
    setStyle(container, {
      width: '200px',
      height: '200px',
      display: 'flex',
      backgroundColor: '#666',
      flexDirection: 'column',
      justifyContent: 'space-between',
    });

    document.body.appendChild(container);

    const child1 = document.createElement('div');
    setStyle(child1, {
      width: '50px',
      height: '50px',
      backgroundColor: 'blue',
    });
    container.appendChild(child1);

    const child2 = document.createElement('div');
    setStyle(child2, {
      width: '50px',
      height: '50px',
      backgroundColor: 'red',
    });
    container.appendChild(child2);

    const child3 = document.createElement('div');
    setStyle(child3, {
      width: '50px',
      height: '50px',
      backgroundColor: 'green',
    });
    container.appendChild(child3);
  }());
});

