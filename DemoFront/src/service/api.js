import base from '../../serverconfig'
import Vue from 'vue'

export default {
   getBooks :() => {
     return Vue.http.get(base.baseUrl + 'api/show_books')
   },

  addBook :(name) => {
     return Vue.http.get(base.baseUrl + 'api/add_book?book_name=' + name)
  }
}
