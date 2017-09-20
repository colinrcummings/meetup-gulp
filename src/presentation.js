import React from 'react';
import {
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
  primary:'#FFFFFF', // white
  secondary: '#2D2D2D', // charcoal
  tertiary: '#CF4647', // red
  quartenary: '#3A3E64 '// blue
}, {
  primary: 'Noto Sans',
  secondary: 'Roboto'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress={'bar'}
        theme={theme}
        transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        {/* intro */}
        <Slide
          bgColor="primary"
          transition={['fade']}
        >
          <Image
            height={300}
            src={require('./images/logo_gulp_red.svg')}
          />
          <Heading
            fit
            textColor="secondary"
            margin="0 0 25px 0"
          >
            Managing environment workflows with gulp.js
          </Heading>
          <Text
            italic
            textColor="quartenary"
            textSize={30}
          >
            @colinrcummings
          </Text>
        </Slide>
        {/* overview */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Overview
          </Heading>
          <List>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              Environments
            </ListItem>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              Workflows
            </ListItem>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              gulp.js
            </ListItem>
            <ListItem
              textSize={35}
            >
              Example
            </ListItem>
          </List>
        </Slide>
        {/* note bene */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            italic
            textColor="primary"
            textSize={60}
            margin="0 0 25px 0"
          >
            Notate Bene
          </Heading>
          <Layout>
            <Fill>
              <Image
                height={225}
                src={require('./images/bell_curve.jpg')}
              />
            </Fill>
            <Fill>
              <Image
                height={225}
                src={require('./images/not_a_tutorial.jpg')}
              />
            </Fill>
          </Layout>
        </Slide>
        {/* environments: cover */}
        <Slide
          bgColor="quartenary"
          transition={['fade']}
        >
          <Heading
            fill
          >
            Environments
          </Heading>
        </Slide>
        {/* environments: operational definitions */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Environments
          </Heading>
          <List>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              <strong>Development:</strong> Where code is <i>made</i>. Run on localhost. Optimized for DX.
            </ListItem>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              <strong>Test:</strong> Where code is <i>tested</i>. Run on localhost or a server. Mirrors production.
            </ListItem>
            <ListItem
              textSize={35}
            >
              <strong>Production:</strong> Where code is <i>used</i>. Run on a server. Optimized for UX.
            </ListItem>
          </List>
        </Slide>
        {/* workflow: cover */}
        <Slide
          bgColor="quartenary"
          transition={['fade']}
        >
          <Heading
            fill
          >
            Workflows
          </Heading>
        </Slide>
        {/* workflow: definition */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Definition
          </Heading>
          <Text
            bold
            textAlign="left"
            margin="0 0 7px 0"
          >
            Workflow:
          </Text>
          <Text
            italic
            textAlign="left"
            textSize={30}
            margin="0 0 14px 0"
          >
            noun
          </Text>
          <Text
            textAlign="left"
            textSize={35}
          >
            The series of tasks required to achieve a desired result.
          </Text>
        </Slide>
        {/* workflows: operational definitions */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Workflows
          </Heading>
          <List>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              <strong>Develop:</strong> Minimize wait time and manual tasks to maximize code quality and output.
            </ListItem>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              <strong>Build:</strong> Copy, transpile, compile, minify and/or test code so it is optimized for production.
            </ListItem>
            <ListItem
              textSize={35}
            >
              <strong>Deploy:</strong> Move code build to production with minimal downtime.
            </ListItem>
          </List>
        </Slide>
        {/* workflow: problem */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            The problem
          </Heading>
          <Image
            height={500}
            src={require('./images/tweet_magic_or_boilerplate.jpg')}
          />
        </Slide>
        {/* workflow: solutions */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Solutions
          </Heading>
          <Layout>
            <Fill>
              <Image
                height={90}
                src={require('./images/logo_rails.png')}
              />
              <Text
                textSize={30}
              >
                asset pipeline
              </Text>
            </Fill>
            <Fill>
              <Image
                height={90}
                src={require('./images/logo_create_react_app.png')}
              />
              <Text
                textSize={30}
              >
                react-scripts
              </Text>
            </Fill>
            <Fill>
              <Image
                height={90}
                src={require('./images/logo_nodejs.png')}
              />
              <Text
                textSize={30}
                margin="4px 0 4px 44px"
              >
                BYOB
                <span
                  style={{
                    fontSize: '20px',
                    color: '#c6a5a6'
                  }}
                >
                  [uild]
                </span>
              </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <hr
                style={{
                  marginBottom: '4px'
                }}
              />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Text
                textAlign="left"
                textColor="#c6a5a6"
                textSize={20}
                italic
              >
                magic
              </Text>
            </Fill>
            <Fill>
              <Text
                textAlign="right"
                textColor="#c6a5a6"
                textSize={20}
                italic
              >
                boilerplate
              </Text>
            </Fill>
          </Layout>
        </Slide>
        {/* workflow: question */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            The question
          </Heading>
          <Image
            height={500}
            src={require('./images/to_roll_or_not.jpg')}
          />
        </Slide>
        {/* workflow: when to roll your own */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            When to roll your own
          </Heading>
          <List>
            <ListItem
              textSize={32}
              margin="0 0 15px 0"
            >
              Need for configuration, customization or control
            </ListItem>
            <ListItem
              textSize={32}
              margin="0 0 15px 0"
            >
              Application complexity
            </ListItem>
            <ListItem
              textSize={32}
            >
              Learning exercise
            </ListItem>
          </List>
        </Slide>
        {/* workflow: options */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Options
          </Heading>
          <Layout>
            <Fill>
              <div title="Webpack">
                <Image
                  height={200}
                  src={require('./images/logo_webpack.svg')}
                />
              </div>
              <Text
                textSize={25}
                margin="0 0 30px 0"
              >
                &#x2606; 31,570
              </Text>
            </Fill>
            <Fill>
              <div title="Gulp">
                <Image
                  height={200}
                  src={require('./images/logo_gulp_white.svg')}
                />
              </div>
              <Text
                textSize={25}
                margin="0 0 30px 0"
              >
                &#x2606; 27,269
              </Text>
            </Fill>
            <Fill>
              <div title="Grunt">
                <Image
                  height={200}
                  src={require('./images/logo_grunt.svg')}
                />
              </div>
              <Text
                textSize={25}
                margin="0 0 30px 0"
              >
                &#x2606; 11,548
              </Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <div title="Brunch">
                <Image
                  height={100}
                  src={require('./images/logo_brunch.svg')}
                />
              </div>
              <Text
                textSize={25}
              >
                &#x2606; 6,121
              </Text>
            </Fill>
            <Fill>
              <div title="Gradle">
                <Image
                  height={100}
                  src={require('./images/logo_gradle.svg')}
                />
              </div>
              <Text
                textSize={25}
              >
                &#x2606; 5,361
              </Text>
            </Fill>
            <Fill>
              <div title="Buck">
                <Image
                  height={100}
                  src={require('./images/logo_buck.svg')}
                />
              </div>
              <Text
                textSize={25}
              >
                &#x2606; 5,037
              </Text>
            </Fill>
            <Fill>
              <div title="Broccoli">
                <Image
                  height={100}
                  src={require('./images/logo_broccoli.svg')}
                />
              </div>
              <Text
                textSize={25}
              >
                &#x2606; 3,051
              </Text>
            </Fill>
          </Layout>
          <Text
            italic
            textColor="#c6a5a6"
            textSize={15}
            margin="25px 0 0 0"
          >
            Toolkits, task runners, module bundlers, etc.
          </Text>
        </Slide>
        {/* workflow: evolution */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Evolution
          </Heading>
          <Image
            height={500}
            src={require('./images/evolution.png')}
          />
          <Link
            href={'https://blog.qmo.io/javascript-tooling-the-evolution-and-future-of-js-front-end-build-tools/'}
            target="blank"
            italic
            textColor="#c6a5a6"
            textSize={15}
          >
            From &ldquo;Javascript Tooling - The Evolution and Future of JS & Front-end Build Tools&rdquo;
          </Link>
        </Slide>
        {/* gulp: cover */}
        <Slide
          bgColor="quartenary"
          transition={['fade']}
        >
          <Heading
            fill
            margin="0 0 35px 0"
          >
            gulp.js
          </Heading>
          <Text
            textColor="primary"
          >
            Automate and enhance your workflows
          </Text>
        </Slide>
        {/* gulp: about */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            What is gulp.js?
          </Heading>
          <List>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              <strong>Automation:</strong> A toolkit that helps you automate painful or time-consuming tasks in your workflows.
            </ListItem>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              <strong>Platform-agnostic:</strong> Integrations are built into all major IDEs; people are using it with PHP, .NET, Node.js, Java, and other platforms.
            </ListItem>
            <ListItem
              textSize={35}
              margin="0 0 15px 0"
            >
              <strong>Strong Ecosystem:</strong> Use npm modules to do anything you want, with over 2,000 curated plugins for streaming file transformations.
            </ListItem>
            <ListItem
              textSize={35}
            >
              <strong>Simple:</strong> By providing only a minimal API surface, it is easy to learn and simple to use.
            </ListItem>
          </List>
        </Slide>
        {/* gulp: usage */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 30px 0"
          >
            Using gulp.js
          </Heading>
          {<CodePane
            lang="javascript"
            source={require('./examples/gulp.js').default}
            margin="20px auto"
          />}
          <Text
            textColor="primary"
            textSize={25}
            lineHeight={1.2}
          >
            Running
            {' '}
            <Code
              bgColor="secondary"
              textColor="primary"
              textSize={25}
            >
              gulp scripts
            </Code>
            {' '}
            in the terminal will trigger gulp to read files with a .js extension from the src/scripts directory, minify them, append a .min suffix and write them to the build/scripts directory.
            <br />
            <br />
            <i>exempli gratia:</i>
            {' '}
            <Code
              bgColor="tertiary"
              textColor="primary"
              textSize={25}
            >
              src/scripts/main.js
            </Code>
            {' => '}
            <Code
              bgColor="tertiary"
              textColor="primary"
              textSize={25}
            >
              build/scripts/main.min.js
            </Code>
          </Text>
        </Slide>
        {/* gulp: plugins */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            gulp.js plugins
          </Heading>
          <Image
            height={525}
            src={require('./images/plugins.jpg')}
          />
        </Slide>
        {/* example: cover */}
        <Slide
          bgColor="quartenary"
          transition={['fade']}
        >
          <Heading
            fill
            margin="0 0 35px 0"
          >
            Example
          </Heading>
        </Slide>
        {/* example: enviornment workflows */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Heading
            textColor="primary"
            textSize={60}
            margin="0 0 15px 0"
          >
            Environment Workflows
          </Heading>
          <Image
            height={525}
            src={require('./images/example_environment_workflows.jpg')}
          />
          <Text
            italic
            textColor="#c6a5a6"
            textSize={15}
            margin="0"
          >
            From a midsize Node/Express/React application deployed to a Windows Server hosted on a VPN. Clean tasks not shown.
          </Text>
        </Slide>
        {/* example: demo */}
        <Slide
          bgColor="tertiary"
          transition={['fade']}
        >
          <Image
            height={400}
            src={require('./images/demo_is_coming.jpg')}
          />
        </Slide>
        {/* feedback */}
        <Slide
          bgColor="quartenary"
          transition={['fade']}
        >
          <Heading
            fill
            margin="0 0 10px 0"
          >
            Feedback
          </Heading>
          <Text
            italic
            textColor="primary"
            textSize={30}
          >
            Questions, comments, suggestions
          </Text>
        </Slide>
        {/* outro */}
        <Slide
          bgColor="primary"
          transition={['fade']}
        >
          <Heading
            fill
            textColor="secondary"
            margin="0 0 40px 0"
          >
            Thank you!
          </Heading>
          <Text
            italic
            textColor="quartenary"
            textSize={30}
          >
            @colinrcummings
          </Text>
        </Slide>
      </Deck>
    );
  }
}
