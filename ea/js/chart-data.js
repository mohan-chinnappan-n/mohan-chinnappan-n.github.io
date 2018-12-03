var treeData = [
  {
    "name": "Show",
    "parent": "null",
    "children": [

      { "name": "Relationship",
        "_children": [
          { "name": "Two Variables" ,
            "_children" : [
                { "name": "Scatter Chart" }
            ] 
          },
 
          { "name": "Three Variables" ,
            "_children" : [
                { "name": "Bubble Chart" }
            ] 
          }
        ]
      },


     { "name": "Composition",
        "_children": [
          { "name": "Static",
            "_children" : [
                { "name": "Simple Share of Total",  "_children":[ {"name":"Pie Chart" }] },
                { "name": "Accumulation or Substraction to Total",  "_children":[ {"name":"Waterfall Chart" }] },
                { "name": "Components of Components", "_children":[ {"name":"Stacked 100% Column Chart w/ Components" }] }
            ] 
          },

         { "name": "Change over time",
            "_children" : [
                { "name": "Few Periods" ,
                 "_children" : [
                    { "name": "Only Relative Diff Matter",  "_children":[ {"name":"Stacked 100% Column Chart" }] }, 
                    { "name": "Relative & Absolute Diff Matter", "_children":[ {"name":"Stacked Column Chart" }] },
 
                  ]
                },
                { "name": "Many Periods" ,
                  "_children" : [
                    { "name": "Only Relative Diff Matter",  "_children":[ {"name":"Stacked 100% Area Chart" }] },
                    { "name": "Relative & Absolute Diff Matter",  "_children":[ {"name":"Stacked Area Chart" }] },

 
                  ]


                }
 
            ] 
          }


        ]
      },


     { "name": "Comparision",
        "_children": [
        { "name": "Among Items",
          "_children": [
                { "name": "One Variable per Item",
                    "_children": [
                      {"name": "Many Categories",
                        "_children": [ {"name": "Table or Table with Embedded Charts" } ]
                      },
                      {"name": "Few Categories",
                       "_children": [
                            {"name": "Many Items",  "_children": [ {"name": "Bar Chart" }   ]},
                            {"name": "Few Items" ,  "_children": [ {"name": "Column Chart"} ]}                                       
                        ]
                      }
                     ]
                 },

                 { "name": "Two Variables per Item",  "_children": [ {"name": "Variable Width Column Chart" }   ]},
 
               ]
            },
            { "name": "Over Time",

                "_children": [
                    { "name": "Many Periods",
                      "_children": [ 
                            {"name": "Cyclical Data",  "_children": [ {"name": "Circular Area Chart" }   ]},
                            {"name": "Non-Cyclical Data" ,  "_children": [ {"name": "Line Chart"} ]}                                       
                      ]

                    },   

                    { "name": "Few Periods",
                      "_children": [ 
                            {"name": "Single or few Categories",  "_children": [ {"name": "Column Chart" }   ]},
                            {"name": "Many Categories" ,  "_children": [ {"name": "Line Chart"} ]}                                       
                      ]

                    },   
 
                   
                ]
               


            },
            ]
     },

     { "name": "Distribution",
        "_children": [
        { "name": "Single Variable",

          "_children": [
             { "name": "Few Data Points",
               "_children": [
                   {"name" : "Column Histogram"}
               ]
           },
             { "name": "Many Data Points",
                "_children": [
                   {"name" : "List Histogram"}
               ]

            },
          ] 
        },
        { "name": "Two Variables",
             "_children": [
                   {"name" : "Scatter Chart"}
               ]



        },
        { "name": "Three Vaiables",
           "_children": [
                   {"name" : "3D Area Chart"}
               ]
        },
        ]
      },





   ]
 }



 ]
;
