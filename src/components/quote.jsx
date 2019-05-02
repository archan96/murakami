import React, { Component } from "react";

class Quotes extends Component {
  constructor() {
    super();

    this.state = {
      id: 1,
      Quotes: [
        {
          id: 1,
          Quote:
            "What makes us the most normal, is knowing that we're not normal.",
          book: "Norwegian Wood"
        },
        {
          id: 2,
          Quote: "I wonder what ants do on rainy days?",
          book: "Norwegian Wood"
        },
        {
          id: 3,
          Quote:
            "Her cry was the saddest sound of orgasm that I had ever heard.",
          book: "Norwegian Wood"
        },
        {
          id: 4,
          Quote:
            "Closing your eyes isn’t going to change anything. Nothing’s going to disappear just because you can’t see what’s going on…. ",
          book: "Kafka on the Shore"
        },
        {
          id: 5,
          Quote:
            "The scene seemed somehow divorced from reality, although reality, he knew, could at times be terribly unreal.",
          book: "Scheherazade"
        },
        {
          id: 6,
          Quote: "From a distance, most things look beautiful.",
          book: "Killing Commendatore"
        },
        {
          id: 7,
          Quote:
            "If this was a dream, then the world I’m living in itself must all be a dream.",
          book: "Killing Commendatore"
        },
        {
          id: 8,
          Quote:
            "In a place far away from anyone or anywhere, I drifted off for a moment.",
          book: "The Wind-Up Bird Chronicle"
        },
        {
          id: 9,
          Quote:
            "There is nothing so cruel in this world as the desolation of having nothing to hope for.",
          book: "The Wind-Up Bird Chronicle"
        },
        {
          id: 10,
          Quote: "I can bear any pain as long as it has meaning.",
          book: "1Q84"
        },
        {
          id: 11,
          Quote:
            "I'm a very ordinary human being; I just happen to like reading books.",
          book: "1Q84"
        },
        {
          id: 12,
          Quote:
            "Even if we could turn back, we'd probably never end up where we started.",
          book: "1Q84"
        }
      ]
    };
  }

  componentWillMount() {
    this.randomNo();
  }

  randomNo = () => {
    const min = 1;
    const rand = min + Math.floor(Math.random() * 12);

    this.setState({ id: rand });
  };

  render() {
    return (
      <>
        {this.state.Quotes.filter(qut => qut.id === this.state.id).map(qut => (
          <div className="Quote" key={qut.id}>
            <p>"{qut.Quote}"</p>
            <p>― {qut.book}</p>
          </div>
        ))}
      </>
    );
  }
}
export default Quotes;
