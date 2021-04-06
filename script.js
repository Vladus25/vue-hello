
function initVue() {
    new Vue({
        el: '#app',
        data: {
          'click': 0,
          'text': 'Hello world, rejoice like me)',
          'img': 'cagnolino.jpeg'
        },
        methods: {
          increase: function(){
            this.click++;
          },
          decrease: function(){
            this.click--;
          }

        }

    });
}


function init() {
  initVue();
}
$(init);
