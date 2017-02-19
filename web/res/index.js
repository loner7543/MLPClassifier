/**
 * Created by User on 019 19.02.17.
 */
Url="calculate"
function send(){
    var hiddenLayers = document.getElementById("hiddenLayers").value;
    var hiddenNeurons =document.getElementById("hiddenNeurons").value;
    var data = {
        hiddenLayers: hiddenLayers,
        hiddenNeurons: hiddenNeurons
    };
    $.ajax({
        url: Url,
        data: JSON.stringify(data),
        type: 'POST',
        dataType: "json",
        contentType: 'application/json', //charset=utf-8,
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            //location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }

    });
}

