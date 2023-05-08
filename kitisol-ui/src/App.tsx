import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [envy, setEnvy] = useState(0);
  const [greed, setGreed] = useState(0);
  const [gluttony, setGluttony] = useState(0);
  const [anger, setAnger] = useState(0);
  const [lust, setLust] = useState(0);
  const [sloth, setSloth] = useState(0);
  const [pride, setPride] = useState(0);
  const total = envy + anger + greed + gluttony + lust + sloth + pride
  const [questions, setQuestions] = useState<any>();
  const questionList = [
    {
      question: 'been mean because your friend did well',
      sin: 'envy',
    },
    {
      question: `broken up someone else's relationship`,
      sin: 'envy',
    },
    {
      question: 'played diva and stolen the spotlight',
      sin: 'envy',
    },
    {
      question: 'hated rich people for being rich',
      sin: 'envy',
    },
    {
      question: 'laughed when a famous person was embarrassed',
      sin: 'envy',
    },
    {
      question: 'pretended to be cool',
      sin: 'envy',
    },
    {
      question:
        'dreamed of revenge on the cool kids, even if they never knew you existed',
      sin: 'envy',
    },
    {
      question:
        'stopped being friends with someone because they had stuff you wanted',
      sin: 'envy',
    },
    {
      question: 'had a schoolyard rival (or a work one? 0.0)',
      sin: 'envy',
    },
    {
      question: 'made a rival look bad',
      sin: 'envy',
    },
    {
      question: 'felt like you were worse than everyone around you',
      sin: 'envy',
    },
    {
      question:
        'spied on your neighbor so you could make sure you were still better than them',
      sin: 'envy',
    },
    {
      question:
        'posted hot gossip on linkedin about someone who got the promotion you wanted',
      sin: 'envy',
    },
    {
      question:
        'imagined how easy it would be to con the rich out of their wealth',
      sin: 'envy',
    },

    {
      question: 'thrown the first punch',
      sin: 'anger',
    },
    {
      question: 'smashed something to bits',
      sin: 'anger',
    },
    [
      {
        question: 'had revenge fantasies',
        sin: 'anger',
      },
      {
        question: 'acted them out',
        sin: 'anger',
      },
      {
        question: 'on more than one person',
        sin: 'anger',
      },
    ],
    [
      {
        question: 'hurt someone',
        sin: 'anger',
      },
      {
        question: 'on purpose',
        sin: 'anger',
      },
    ],
    {
      question: 'acted on the urge to go scorched earth',
      sin: 'anger',
    },
    [
      {
        question: 'kept a grudge',
        sin: 'anger',
      },
      {
        question: 'for years after you last saw the person',
        sin: 'anger',
      },
      {
        question: 'even though they apologized',
        sin: 'anger',
      },
    ],
    [
      {
        question: 'hated someone',
        sin: 'anger',
      },
      {
        question: "that you'd never met",
        sin: 'anger',
      },
      {
        question: 'hated yourself',
        sin: 'anger',
      },
    ],

    [
      {
        question: 'had sex',
        sin: 'lust',
      },
      {
        question: 'lots of sex',
        sin: 'lust',
      },
      {
        question: 'with multiple partners ',
        sin: 'lust',
      },
      {
        question: 'who were not aware of each other',
        sin: 'lust',
      },
    ],
    {
      question: 'ever dreamed of fucking your clone',
      sin: 'pride',
    },
    {
      question: 'fucked two people at once',
      sin: 'lust',
    },
    {
      question: 'requested nudes',
      sin: 'lust',
    },
    {
      question: 'cheated on a significant other',
      sin: 'lust',
    },
    {
      question: 'had sex instead of going to work/class',
      sin: 'lust',
    },
    {
      question: 'had sex while drunk',
      sin: 'lust',
    },
    {
      question: 'seduced someone',
      sin: 'lust',
    },
    {
      question: 'masturbated ',
      sin: 'lust',
    },
    {
      question: 'participated in an orgy',
      sin: 'lust',
    },
    {
      question:
        'focused more on sex than on participating in your own survival',
      sin: 'lust',
    },
    {
      question: 'ignored boundaries',
      sin: 'lust',
    },
    [
      {
        question: 'bought really fancy food',
        sin: 'gluttony',
      },
      {
        question: "even though you couldn't afford it",
        sin: 'gluttony',
      },
    ],
    {
      question: 'hoarded all the good snacks',
      sin: 'gluttony',
    },
    {
      question: 'promised to share a desert, but then ate it all',
      sin: 'gluttony',
    },
    {
      question: 'spent more than four hours on the same meal',
      sin: 'gluttony',
    },
    [
      {
        question: 'snacked all day',
        sin: 'gluttony',
      },
      {
        question: "so much you weren't hungry for any meals",
        sin: 'gluttony',
      },
      {
        question: 'but you ate them anyway',
        sin: 'gluttony',
      },
    ],
    [
      {
        question: 'gotten drunk',
        sin: 'gluttony',
      },
      {
        question: 'gotten black out drunk',
        sin: 'gluttony',
      },
      {
        question: 'regularly',
        sin: 'gluttony',
      },
    ],
    {
      question: 'been impulsive',
      sin: 'gluttony',
    },
    [
      {
        question: 'eaten so much it hurt',
        sin: 'gluttony',
      },
      {
        question: 'so much you puked',
        sin: 'gluttony',
      },
      {
        question: 'and then gone back for more',
        sin: 'gluttony',
      },
    ],
    {
      question: 'overestimated your skills',
      sin: 'pride',
    },
    {
      question: 'bragged on social media',
      sin: 'pride',
    },
    {
      question: 'felt like you were surrounded by idiots',
      sin: 'pride',
    },
    {
      question: 'posted thirst traps',
      sin: 'pride',
    },
    {
      question: 'used filters to look hotter',
      sin: 'pride',
    },
    [
      {
        question: 'refused help',
        sin: 'pride',
      },
      {
        question: 'even though you really needed it',
        sin: 'pride',
      },
    ],
    [
      {
        question: 'felt that life was unfair',
        sin: 'pride',
      },
      {
        question: 'to you in particular',
        sin: 'pride',
      },
    ],
    {
      question:
        'taken charge of you life, instead of letting a divine being make choices for you',
      sin: 'pride',
    },
    {
      question: 'done whatever it took to win',
      sin: 'pride',
    },
    {
      question: 'cheated on a test',
      sin: 'pride',
    },
    {
      question: 'showed off',
      sin: 'pride',
    },
    {
      question: 'ignored your alarm',
      sin: 'sloth',
    },
    {
      question: 'slept more than twenty four hours because it felt good',
      sin: 'sloth',
    },
    {
      question: 'put off work too long',
      sin: 'sloth',
    },
    {
      question: 'not finished a thing you said you would',
      sin: 'sloth',
    },
    {
      question: 'skipped work or class',
      sin: 'sloth',
    },
    {
      question: 'actually enjoyed yourself',
      sin: 'sloth',
    },
    {
      question: 'lost track of days or months',
      sin: 'sloth',
    },
    {
      question: 'left a project unfinished',
      sin: 'sloth',
    },
    {
      question: 'been frustrated by your lack of action',
      sin: 'sloth',
    },
    {
      question: 'come up with ideas, but not followed through',
      sin: 'sloth',
    },
    {
      question: 'avoided all responsibility',
      sin: 'sloth',
    },
    {
      question: 'preferred to watch rather than do',
      sin: 'sloth',
    },
    {
      question: 'been crippled by anxiety',
      sin: 'sloth',
    },
    {
      question: 'made excuses to yourself',
      sin: 'sloth',
    },
    {
      question: 'pirated something. A game, a movie, manga, or maybe a research paper!',
      sin: 'greed',
    },
    {
      question: 'been a billionaire',
      sin: 'greed',
    },
    {
      question: "bought stuff you couldn't afford",
      sin: 'greed',
    },
    {
      question: 'made an art out of making money',
      sin: 'greed',
    },
    {
      question: 'been selfish',
      sin: 'greed',
    },
    [
      {
        question: 'shoplifted',
        sin: 'greed',
      },
      {
        question: 'regularly',
        sin: 'greed',
      },
      {
        question: 'just because',
        sin: 'greed',
      },
    ],
    {
      question: 'posted about your grind-set on social media',
      sin: 'greed',
    },
    {
      question: 'followed wall street bets',
      sin: 'greed',
    },
    [
      {
        question: 'bought a thing even though you already had one',
        sin: 'greed',
      },
      {
        question: "and you didn't have room for it",
        sin: 'greed',
      },
    ],
    [
      {
        question: 'had so many things they took up every surface of your house',
        sin: 'greed',
      },
      {
        question: 'even the floor',
        sin: 'greed',
      },
      {
        question:
          "so that there wasn't even space to walk without going over them",
        sin: 'greed',
      },
    ],
  ];

  const handleCheck = (
    event: any,
    sin: string
  ) => {
    const value = event.target.checked ? 1 : -1;
    switch (sin) {
      case 'envy':
        setEnvy((count) => count + value);
        break;
      case 'greed':
        setGreed((count) => count + value);
        break;
      case 'gluttony':
        setGluttony((count) => count + value);
        break;
      case 'anger':
        setAnger((count) => count + value);
        break;
      case 'lust':
        setLust((count) => count + value);
        break;
      case 'sloth':
        setSloth((count) => count + value);
        break;
      case 'pride':
        setPride((count) => count + value);
        break;
      default:
        break;
    }
  };

  const biggestVice = () => {
    const options = [
      { value: envy, name: 'envy' },
      { value: greed, name: 'greed' },
      { value: gluttony, name: 'gluttony' },
      { value: anger, name: 'anger' },
      { value: lust, name: 'lust' },
      { value: sloth, name: 'sloth' },
      { value: pride, name: 'pride' },
    ];
    return options.reduce((prev, current) => {
      return prev.value > current.value ? prev : current;
    });
  };

  const shuffleArray = (array:any) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const scoreText = (total:number) => {
    if(total < 25){
      return "the good kid"
    } else if (total < 50){
      return "the rebel"
    } else if (total < 75){
      return "hedonistic"
    }
    else {
      return "depraved"
    }
  }

  useEffect(() => {
    const htmlQuestions = shuffleArray(questionList).map(
      (
        item:
          | { question: string; sin: string }
          | { question: string; sin: string }[],
        i: number
      ) => {
        if (Array.isArray(item)) {
          return item.map((subItem: { question: string; sin: string }, j) => {
            return (
              <li key={j}>
                <label>
                  <input
                    type="checkbox"
                    name={subItem.sin + j}
                    value={subItem.sin + j}
                    onChange={(e) => handleCheck(e, subItem.sin)}
                  />
                  {subItem.question}
                </label>
              </li>
            );
          });
        } else {
          return (
            <li key={i}>
              <label>
                <input
                  type="checkbox"
                  name={item.sin + i}
                  value={item.sin + i}
                  onChange={(e) => handleCheck(e, item.sin)}
                />
                {item.question}
              </label>
            </li>
          );
        }
      }
    );
    setQuestions(htmlQuestions);
  }, []);

  return (
    <>
      <h1>The Purity Test</h1>
      <fieldset style={{ textAlign: 'left' }}>
        <legend>Have you ever:</legend>
        <ol>{questions}</ol>
      </fieldset>
      <br />
      <button
        onClick={() => {
          window.alert(`You're ${scoreText(total)}. You scored ${total}. Your biggest vice is ${biggestVice().name}
          `);
        }}
      >
        Score Me
      </button>
      {/* <div
        style={{
          textAlign: 'left',
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          width: '15rem',
        }}
      >
        <h2>Your Scores</h2>
      </div> */}
    </>
  );
}

export default App;
