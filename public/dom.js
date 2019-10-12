var addWentWellButton   = document.getElementById('wentWellAddCard');
var addImproveButton    = document.getElementById('couldImproveAddCard');
var addActionButton     = document.getElementById('actionPointsAddCard');
var wentWellInputBox    = document.getElementById('wentWellAddInputBox');
var wentWellCards       = document.getElementById('wentWellCards');
var socket              = io.connect('http://localhost:4000');

addWentWellButton.addEventListener('click', function(){
    wentWellInputBox.innerHTML += 
    `
    <div class='row'>
        <input type="text" id="newWentWellCard" placeholder='Went Well'>
    </div>
    <div class='row'>
        <button id="submitWentWellButton"> Add Card </button>
    </div>
    `

    var submitWentWellButton =  document.getElementById('submitWentWellButton');

    submitWentWellButton.addEventListener('click', function(){
        var newWentWellCard = document.getElementById('newWentWellCard');
        var content = newWentWellCard.value;
        var cutContent = content.replace(/\s/g, '');

        wentWellInputBox.innerHTML = '';

        newCard = 
        `
        <div class="container" id=${cutContent}Container>
            <div class='row'>
                <div class='col-lg-9'>
                    <button type="button" id=${cutContent} class="btn btn-primary " data-toggle="modal" data-target="#${cutContent}Modal">
                    ${newWentWellCard.value}
                    </button>
                </div>    

                <button id=Delete${cutContent}>X</button>
            </div>
        </div>

        <div class="modal fade" id="${cutContent}Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="${cutContent}ModalLabel">${content}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5>Description:</h5>
                
                <a class='description' id='${cutContent}AddDescription' >Add Description</a>
                <input type='textbox' id='${cutContent}Description' placeholder='Add Description'/>
                <button class='btn btn-success'>Save</button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        `;

        // var cardSelect = document.getElementById('cutContent');

        // cardSelect.addEventListener('click', function(){
             
        // });


        socket.emit('card', {
            card: newCard,
            cardId: cutContent
        });


        socket.on('card', function(data){
            wentWellCards.innerHTML += data.card;
            data.card = '';
        });

    });

});


addImproveButton.addEventListener('click', function(){
    
});

addActionButton.addEventListener('click', function(){
    
});