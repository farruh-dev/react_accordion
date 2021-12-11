import Accordion from "./components/Accordion/Accordion";

function App() {

  return (
    <div className="App">
        <div className="container">
          <h1>Accordion</h1>
          <Accordion className={"faq"} faqs={faqArray}/> 
        </div>
    </div>
  );
}

const faqArray = [
  {
    question: "How quickly can I register?",
    answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
  },
  {
    question: "Why can not I give my orders at affordable prices?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "How can I cancel my order?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "Who can give a complete and qualitative answer to my questions?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
  {
    question: "How can I see all my orders?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!"
  },
]

export default App;
