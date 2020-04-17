
- Explain the difference between `Relational Databases` and `SQL`.

  Relational databases are stored in spreadsheet form (rows+columns)
  SQL is the language that manipulates this data

- Why do tables need a `primary key`?

  Primary key is used for unique identification on each entry. 
  Can be used to connect tables

- What is the name given to a table column that references the primary key on another table.

  Foreign Keys and primary keys connects tables together

- What do we need in order to have a _many to many_ relationship between two tables.

  A unique Identifier like a student ID, and it is connected to a class which has a roster of multiple students


## Minimum Viable Product

- [x] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [x] a `project` can have multiple `tasks`.
  - [x] a `task` belongs to only one `project`.
  - [x] a `project` can use multiple `resources`. Example of `resources` are: computer, conference room, microphone, delivery van.
  - [ ] the same `resource` can be used in multiple `projects`.
  - [x] when adding `projects` the client must provide a name, the description is optional.
  - [x] when adding `resources` the client must provide a name, the description is optional.
  - [x] when adding a `task` the client must provide a description, the notes are optional.
  - [x] when adding a `task` the client must provide the `id` of an existing project.
  - [x] for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.
- [ ] Build an API with endpoints for:
  - [x] adding resources.
  - [x] retrieving a list of resources.
  - [x] adding projects.
  - [x] retrieving a list of projects.
  - [x] adding tasks.
  - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.

### Entities

A `project` is what needs to be done. We want to store the following data about a `project`:

- [x] a unique ID.
- [x] a name. This column is required.
- [x] a description.
- [x] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [x] a unique ID.
- [x] a name. This column is required.
- [x] a description.

The database should not allow resources with duplicate names.

A `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

- [x] a unique ID.
- [x] a description of what needs to be done. This column is required.
- [x] a notes column to add additional information.
- [x] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.
