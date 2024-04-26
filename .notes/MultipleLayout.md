/**
* @constants/index.js
*
* Tại đây khai báo một const PULIC_LAYOUT,
* đối tượng này sẽ định nghĩa tên cho các public layout cho ứng dụng 
*
* @utils/import.js
*
* Tại đây ta sẽ tạo các component global cho project.
* Ta sẽ bind các giá trị PUBLIC_LAYOUT với các component layout tương ứng
*
* @router/index.js
*
* Với mỗi route, ta có thể khai báo layout mà route đó cần dùng thông qua
* thuộc tính meta.layout
*
* @App.vue
*
* Tại đây ta sẽ cấu hình dynamic layout, sao cho
* mỗi route sẽ sử dụng đúng layout mà nó cần dùng
*/
