import base from '../../serverconfig'
import Vue from 'vue'

export default {
   getBooks :() => {
     return Vue.http.get(base.baseUrl + 'api/show_books')
   }
}
