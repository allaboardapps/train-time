# Train Time

* Version 0.0.1
* Alexa Project Name: Train Time
* Alexa Invocation Name: train time
* Alexa Project ID: amzn1.ask.skill.37a0bd36-fd3a-4236-84ef-ed1d8aa6b612

## Project Goals

### High Level

* To provide users with upcoming train arrival times for specific train directions, train lines, and train stations on the Chicago Transportation Authority (CTA) system through a Voice User Interface (VUI)

### Purpose

#### What do users want to accomplish?

* Users want to receive information about the arrival times of upcoming trains at a particular station going in a specific direction

#### What are the capabilities of the skill?

* Provide the next arrival time for a train on a particular line at a particular station and going in a particular direction
* Provide the next arrival times for the next 3 trains on a particular line at a particular station and going in a particular direction
* Provide notice that there are no trains scheduled to arrive on a particular line at a particular station and going in a particular direction

#### What must a user do?

* User needs to activate skill
* User needs to provide train line
* User needs to provide train station
* User needs to provide train direction

#### What can a user do?

* User can ask for next train
* User can ask for next trains (max 3)

## Application Schema

### Intents

* NextTrain
* NextTrains
* Cancel
* Stop
* Help

### Utterances

* Next Train
* Next Trains

### Slots

* LIST_OF_TRAIN_LINES

  ```
  Blue
  Brown
  Green
  Orange
  Pink
  Purple
  Red
  ```
  - {line} line

* LIST_OF_TRAIN_DIRECTIONS

  ```
  North
  Northbound
  South
  Southbound
  East
  Eastbound
  West
  Westbound
  Both
  All
  ```
  - going {direction}
  - headed {direction}
  - heading {direction}
  - moving {direction}
  - {direction}

* LIST_OF_TRAIN_STATIONS (Multiple)

  ```
  Western
  Damen
  Lawrence
  ...
  ```
  - {station} station

### Dialog model

## Brainstorm

* Train alert information
* Favorite line/station/direction combos
* Walk/Run determinations
* Train schedule information
* Train news information
* CTA Trivia
