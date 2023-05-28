$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

function removeRow(id, url)
{
    if (confirm('Xoá mà không thể khôi phục. Bạn chắc chứ?')) {
        $.ajax( {
            type: 'DELETE',
            dataType: 'JSON',
            data: { id },
            url: url,
            success: function (result) {
                // console.log(result);
                if (result.error === false) {
                    alert(result.message);
                    location.reload();
                } else {
                    alert('Xoá lỗi vui lòng thử lại');
                }
            }
        })
    }
}

/*Upload File */
$('#upload').change(function (){
   // console.log(123);
    const form= new FormData();
    form.append('file', $(this)[0].files[0]);

    $.ajax( {
        processData: false,
        contentType: false,
        type: 'POST',
        dataType: 'JSON',
        data: form,
        url: 'http://localhost:81/shop/public/admin/upload/services',
        success: function (results) {
            // console.log(results);
            if (results.error === false) {
                // Xây dựng URL đầy đủ từ đường dẫn gốc và đường dẫn file được trả về từ server
                var baseUrl = 'http://localhost:81/shop/public/';
                var imagePath = results.url;
                var fullUrl = baseUrl + imagePath;

                // Hiển thị ảnh và lưu đường dẫn URL của file
                $('#image_show').html('<a href="' + fullUrl + '" target="_blank">' +
                    '<img src="' + fullUrl + '" width="100px"></a>');
                $('#thumb').val(fullUrl);
            } else {
                alert('Upload File Lỗi');
            }
        }
    });
});
