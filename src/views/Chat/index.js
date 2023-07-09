import { Component } from "react";

class Chat extends Component {
    constructor(props) {
        super(props)
        // this.propTypes = {
        //     btncontent:this.propTypes
        // }
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);

        this.listData = [1, 2, 3, 4, 5]
    }
    // props(){
    //     return {
    //         btncontent:{
    //             requi
    //         }
    //     }
    // }
    componentDidMount() {
        console.log('child component');
        console.log(this.propTypes);
    }
    componentWillMount(){
        this.handleList()
    }
    handleList() {
        this.listItems = this.listData.map((item, key) => {
            return <li key={item.toString()}>{item}</li>
        });
        console.log(this.listItems);
    }
    componentWillUnmount() {

    }
    handleClick(data) {
        this.setState({ count: this.state.count + 1 });
        console.log(data);
    }
    render() {
        return (
            <>
                <div>Chat</div>
            </>
        )
    }
}
export default Chat;