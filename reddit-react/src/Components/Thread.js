import React, { Component } from 'react';
import { Table, Form, FormControl, Button } from 'react-bootstrap';

function ThreadComponent(props) {
    const styles = {
        titleStyle: {
            color: 'red',
        },
        thumbSize: {
            width: 140,
            height: 105
        },
    };
    const { data } = props;
    return (
        <tr>
            <td style={styles.titleStyle}>{props.index}</td>
            <td>
                {
                    (data.thumbnail !== "self") 
                    ? (<img src={data.thumbnail}></img>) 
                    : (<img style={styles.thumbSize} src="https://b.thumbs.redditmedia.com/en9Scp_T9_RTkVsX_YNUqZOyj-O5V63wIAQ-TRKdsFA.png"></img>)
                }
            </td>
            <td>
                <a target="_blank" href={`https://reddit.com${data.permalink}`}>
                    <p>{props.title}</p>
                    <p>{`${props.points} points - ${props.comments} comments - ${props.subreddit} - Posted by ${props.user}`}</p>
                </a>
            </td>
        </tr>
    );
}

const data2 = [
    {
        title: "Hello World",
        points:"4.1k",
        comments: 9000,
        subreddit: "r/bestsubreddit",
        user: "r/Kenny_Do"
    },
    {
        title: "Best news in the world",
        points:"6.2k",
        comments: 5,
        subreddit: "r/hello_world",
        user: "r/Alfredo_Vargas"
    },
    {
        title: "Awesome news",
        points:"1.5k",
        comments: 3,
        subreddit: "r/doomssubreddit",
        user: "r/Kenny_Do"
    }
];



class Thread extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            gotData: false,
            inputText: ''
        };
    }
    async componentDidMount() {
        const response = await fetch('https://www.reddit.com/r/firefox/.json');
        const json = await response.json();
        this.setState({
            data: json,
            gotData: true,
        });

    }

    async SearchReddit(query) {
        const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
        const json = await response.json();
        this.setState({
            data: json,
            gotData: true
    });
    }

    render() {
        const { data, gotData } = this.state;
        // console.log(gotData, data);
        console.log(this.state.inputText);
        return (
            <div>
                <Form style={{width:'100%', paddingBottom:'20px'}}>
                    <FormControl placeholder='Search Reddit...' value={this.state.inputText}
                        onChange={(e) => this.setState({ inputText: e.target.value })}
                        onKeyPress={
                            (e) => {
                                if (e.key === "Enter")
                                {
                                    e.preventDefault();
                                    this.SearchReddit(this.state.inputText);
                                }    
                            }
                        }
                        onKeyDown={null}
                    />
                </Form>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        gotData && data.data.children.map((child, index) => {
                            const { data } = child;
                            return (
                                <ThreadComponent
                                    key={data.id}
                                    index={index + 1}
                                    title={data.title}
                                    points={data.score}
                                    comments={data.num_comments}
                                    subreddit={data.subreddit_name_prefixed}
                                    user={data.author}
                                    data={data}
                                />
                            );
                        })
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Thread;
