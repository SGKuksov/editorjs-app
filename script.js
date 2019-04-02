const editor = new EditorJS({
  holderId: 'app',
  // Other configuration properties

  /**
   * onReady callback
   */
  onReady: () => {
    console.log('Editor.js is ready to work!');
  },

  /**
   * onChange callback
   */
  onChange: () => {
    console.log("Now I know that Editor's content changed!");

    editor
      .save()
      .then(outputData => {
        myApp.blocks = [...outputData.blocks];
        console.log('Article data: ', outputData);
      })
      .catch(error => {
        console.log('Saving failed: ', error);
      });
  },

  /**
   * Enable autofocus
   */

  autofocus: true
});

var myApp = new Vue({
  data: {
    message: 'Hello Vue!',
    blocks: []
  },
  computed: {
    print() {
      let arr = [];

      this.blocks.forEach(item => {
        let str = JSON.stringify(item);
        str = str.replace(/{/g, '<b>{</b>');
        str = str.replace(/}/g, '<b>}</b>');

        arr.push(str);
      });

      return arr;
    }
  }
}).$mount('#app2');
