var App = React.createClass({

    getInitialState: function(){
        return {
//            listItems: []
        }
    },
    
    addListItem: function(){
//        listItem.push('')
    },

    render: function(){
        return(
            <div>
                // Title
                <h1>My todo list app</h1>

                // Enter text component
//                <EnterListItemTextBox addListItem={this.addListItem} />

                // List
//                <List list={this.state.listItems} />
            </div>
        );   
    } //end render
        
});


// Expects props: addListItem()
var EnterListItemTextBox = React.createClass({
//    
//    handleClick: function() {
//        console.log("I am clicked");
//    },
//    
//    render: function() {
//        return(
//            <div>
//                <input type="text" />
//                <input type="submit" onClick={this.handleClick}/>
//            </div>
//        )
//    }
});


// Expects props: list
var List = React.createClass({
//    
//    render: function() {
//        return(
//            <div>
//                //foreach list item
////            {this.props.list}.forEach(function(element, index, array) {
////                <ListItem item={element} />
////            })
//            </div>
//        )
//    }
});


// Expects props: item
var ListItem = React.createClass({
//    
//    render: function() {
//        return(
//            <div>
//                //list item
//                {this.props.item}
//            </div>
//        )
//    }
//    
});

React.render(<App />,  document.getElementById("content"));