"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  Lightbulb,
  TreeDeciduous,
  Globe,
  Thermometer,
  Book,
  Bone,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function ClimateChangePage() {
  const [quizScore, setQuizScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const quizQuestions = [
    {
      question: "What makes Earth a 'Goldilocks' planet?",
      options: [
        "It has the most gold mines in the solar system",
        "It's the perfect distance from the Sun for life",
        "It is the smallest planet in the solar system",
        "It has a protective layer made of real gold",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the main cause of climate change?",
      options: [
        "Aliens taking over the atmosphere",
        "The Earth's magnetic field reversing",
        "Burning fossil fuels for energy",
        "The Sun getting closer to Earth",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which greenhouse gas is released when we burn fossil fuels?",
      options: ["Helium", "Carbon Dioxide (CO2)", "Oxygen (O2)", "Hydrogen"],
      correctAnswer: 1,
    },
    {
      question: "Why are rising global temperatures a problem for polar bears?",
      options: [
        "They don't like warmer water",
        "Ice is melting, and they need it to hunt",
        "They prefer sunny beaches",
        "The snow is turning into rain, and they can't stand getting wet",
      ],
      correctAnswer: 1,
    },
    {
      question: "What happens when trees are cut down?",
      options: [
        "They grow back instantly",
        "The air becomes fresher",
        "More CO2 stays in the atmosphere",
        "It starts raining candy",
      ],
      correctAnswer: 2,
    },
  ];

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setQuizScore(quizScore + 1);
    }
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizStarted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">
            Understanding Climate Change: Science, Impact, and Our Role
          </h1>
        </div>
      </header>
      <Image
        src="/top-image.jpg"
        alt="Climate change"
        className="object-cover w-full h-96"
        width={1920}
        height={1080}
      />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Globe className="mr-2" />
            Earth—Our Only Home
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>
                Earth: The Only Habitable Planet in Our Solar System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Earth is a rare and precious place, perfectly positioned in the
                "Goldilocks Zone"—the ideal distance from the Sun where
                conditions are "just right" for liquid water, moderate
                temperatures, and life as we know it.
              </p>
              <p className="mb-4">
                With no alternative planet nearby (the next closest star system,
                Alpha Centauri, is 4.37 light-years away), we must do everything
                possible to protect our home—Earth. Every decision we make today
                impacts the future of our planet.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Bone className="mr-2" />
            Relationship Between Climate Change and Other High School Subjects.
          </h2>
          <Image
            src="/black-graph.jpg"
            alt="graph"
            className="object-cover w-full h-96"
            width={1920}
            height={1080}
          />

          <p>Photo credit: NASA</p>
          <br />
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Thermometer className="mr-2" />
            Introduction to Climate Change
          </h2>
          <Tabs defaultValue="causes">
            <TabsList>
              <TabsTrigger value="causes">Key Causes</TabsTrigger>
              <TabsTrigger value="consequences">Consequences</TabsTrigger>
            </TabsList>
            <TabsContent value="causes">
              <Card>
                <CardHeader>
                  <CardTitle>Key Causes of Climate Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/sub-details.jpg"
                    alt="graph"
                    className="o h-"
                    width={420}
                    height={500}
                  />
                  <br />
                  <p>Photo credit: NASA</p>
                  <br />
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Burning Fossil Fuels: Releases CO2, trapping heat in the
                      atmosphere.
                    </li>
                    <li>
                      Deforestation: Reduces CO2 absorption and releases stored
                      carbon.
                    </li>
                    <li>
                      Industrial Activity: Releases various greenhouse gases.
                    </li>
                    <li>
                      Agriculture: Livestock farming releases methane, a potent
                      greenhouse gas.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="consequences">
              <Card>
                <CardHeader>
                  <CardTitle>Consequences of Climate Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Rising Global Temperatures: Melting ice sheets and rising
                      sea levels.
                    </li>
                    <li>
                      Extreme Weather Events: Increased frequency of hurricanes,
                      heatwaves, and droughts.
                    </li>
                    <li>
                      Ocean Acidification: Harming marine life and ecosystems.
                    </li>
                    <li>
                      Disruption of Ecosystems: Altering habitats and migration
                      patterns.
                    </li>
                    <li>
                      Food and Water Security: Affecting crop yields and water
                      availability.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Book className="mr-2" />
            Climate Change and School Subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Physics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Physics explains the greenhouse effect and energy imbalance.
                  For example, Earth is gaining about 306 terawatts of extra
                  heat due to climate change.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chemistry</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Chemistry helps us understand CO2 emissions. The world emits
                  about 36 billion metric tons of CO2 annually, which is
                  equivalent to 9.72 billion tons of carbon.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Biology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Biology shows the impact on ecosystems. For every 1°C increase
                  in global temperature, about 10% of species face extinction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Geography</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Geography helps predict natural disasters. The frequency of
                  extreme weather events is predicted to increase by 20% per
                  decade due to climate change.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Lightbulb className="mr-2" />
            How You Can Help
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Practical Examples for Students</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Participate in research projects and science fairs focused on
                  climate change solutions.
                </li>
                <li>
                  Get involved in school and community tree planting
                  initiatives.
                </li>
                <li>
                  Practice the 3 Rs: Reduce, Reuse, Recycle to minimize your
                  carbon footprint.
                </li>
                <li>
                  Walk or bike for short distances instead of using a car.
                </li>
                <li>Educate others about the importance of climate action.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <AlertCircle className="mr-2" />
            Test Your Knowledge
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Climate Change Quiz</CardTitle>
              <CardDescription>
                Test what you've learned about climate change
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!quizStarted ? (
                <div>
                  <p className="mb-4">
                    Ready to test your knowledge? Take our quick quiz!
                  </p>
                  <Button
                    onClick={() => {
                      setQuizStarted(true);
                      setQuizScore(0);
                      setCurrentQuestion(0);
                    }}
                  >
                    Start Quiz
                  </Button>
                </div>
              ) : currentQuestion < quizQuestions.length ? (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                  <div className="space-y-2">
                    {quizQuestions[currentQuestion].options.map(
                      (option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          className="w-full text-left justify-start"
                        >
                          {option}
                        </Button>
                      )
                    )}
                  </div>
                  <Progress
                    value={((currentQuestion + 1) / quizQuestions.length) * 100}
                    className="mt-4"
                  />
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quiz Complete!</h3>
                  <p>
                    Your score: {quizScore} out of {quizQuestions.length}
                  </p>
                  <Button
                    onClick={() => {
                      setQuizStarted(true);
                      setQuizScore(0);
                      setCurrentQuestion(0);
                    }}
                    className="mt-4"
                  >
                    Retake Quiz
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <section>
          <div className="flex flex-col items-center">
            <Image
              src="/planet.jpg"
              alt="Climate change"
              className=" w-1/2 h-1/2"
              width={1920}
              height={1080}
            />
            <p className="font-bold text-lg">Be the change the world needs!</p>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024 Climate Change Education Initiative. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
