const inputRoutes = [
 {
  name: "Dashboard",
  path: "dashboard",
  element: "ADMIND_ASHBOARD",
 },
 {
  name: "User Management",
  children: [
   {
    name: "Create Admin",
    path: "create-admin",
    element: "CREATE_ADMIN",
   },
   {
    name: "Create Faculty",
    path: "create-faculty",
    element: "CREATE_FACULTY",
   },
   {
    name: "Create Student",
    path: "create-student",
    element: "CREATE_STUDENT",
   },
  ],
 }
]

const OutputRoutesLogic = inputRoutes.reduce((acc, item) => {
 if (item.path && item.element) {
  acc.push(
   { path: item.path, element: item.element }
  )
 }
 if (item.children) {
  item.children.forEach((child) => {
   if (child.path && child.element) {
    acc.push(
     { path: child.path, element: child.element }
    )
   }
  })
 }
 return acc
}, [])

console.log(OutputRoutesLogic);

/*
[
  {
    path: "dashboard",
    element: "ADMIND_ASHBOARD",
  }, {
    path: "create-admin",
    element: "CREATE_ADMIN",
  }, {
    path: "create-faculty",
    element: "CREATE_FACULTY",
  }, {
    path: "create-student",
    element: "CREATE_STUDENT",
  }
]
*/

const OutputSideBarLogic = inputRoutes.reduce((acc, item) => {
 if (item.path && item.element) {
  acc.push(
   { key: item.name, label: item.path }
  )
 }
 if (item.children) {
  acc.push(
   { key: item.name, label: item.name, children: item.children.map(child => ({ key: child.name, label: child.path })) }
  )
 }
 return acc
}, [])

console.log(JSON.stringify(OutputSideBarLogic));


/*
[
  {
    key: "Dashboard",
    label: "dashboard",
  }, {
    key: "User Management",
    label: "User Management",
    children: [
      {
      key:"Create Admin",
      label:"create-admin"
      },
      {
      key:"Create Faculty",
      label:"create-faculty"
      },
      {
      key:"Create Student",
      label:"create-student"
      }
    ],
  }
]
*/
