<img src="https://i.imgur.com/KBwhRtk.png">

# React "Students" Lab

## Intro

This lab will provide some practice doing the following:

- Creating a UI using a hierarchy of components
- Passing data as props from a parent to a child component
- Mapping arrays of data into arrays of components

## Setup

- In your terminal navigate to the proper directory where you keep your labs.
- Run `npx create-react-app react-nested-props` to create a new React App.
- Navigate into your new React App with `cd react-nested-props`.

## Minimum Requirements

**The layout and styling of the markup is left up to your discretion.**

1. Within the `<App>` component create a `students` variable and initialize it with the following array of data.

```js
[
  {
    name: 'Cait Yomorta',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'Holly Baird',
    bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Wes Mungia',
    bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  }
]
```

2. Code the `<App>` component's JSX to display a `<Student>` component for each student object in the `students` variable.

3. Create and code a `<Student>` component that:

	- Accepts a student object as a prop.
    - Renders the student's `name` & `bio` properties.
	- Renders a `<Score>` component for each score object in the student's `scores` property.

4. Create and code the `<Score>` component so that it renders the score object's `date` & `score` properties.



