#  Relational Database
  
 - Type System

---

#  Relational Algebra
  
 - Created by Dr. Codd
 -  a well-founded semantics used for **modeling** the data stored in relational databases, and **defining queries** on it.
 - Provides theoretical foundation for relational databases and query language (SQL)
 - Five primitive operators:
    - **Selection**  - **s(aθb)(R)** denotes all tuples in R for which θ holds between the **a** and the **b** attributes. Example: **s(age > 35)(Person)** - called predicate - selects tuples in Relation Person, where age of the Relation (Person) > 35.
    A generalized selection is a unary operation :   **AND, OR and NOT**
    Example:
     **s(age > 35 AND weight <= 60) (Person)**

     In SQL, selections are performed by using WHERE definitions in SELECT, UPDATE, and DELETE statements,

    - **Projection**
    Example:  Relation Person and its projection on  the attributes **age** and **weight**:
    **p(age,weight)(Person)**
---
#  Relational Algebra Contd.
- **Cartesian Product** returns a set from multiple sets.
    Cartesian product **A × B** is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B. 
<img src="md/CartesianProduct.png" height='200'/>
Combines attributes of two relations into one.
**R3 = join(R1,D1,R2,D2)**
- **Set Union**
- **Set Difference**

???

Talk about use of Relational Calculus in the RDBMS design
---

# JOIN operator

![Join Op](http://www1.udel.edu/evelyn/SQL-Class2/joins.jpg)

---
# JOIN operator contd.


<hr/>
INNER JOIN:  Select only those rows that have values in common in the columns specified in the ON clause.

<br/> 

LEFT, RIGHT, or FULL OUTER JOIN:  Select all rows from the table on the left (or right, or both) regardless of whether the other table has values in common and (usually) enter NULL where data is missing.   
<br/> 
CROSS JOIN :  Select all possible combinations of  rows and columns from both tables (Cartesian product). 
           
---
# OUTER JOINS


---
# References
- [Dr. Codd's 1970 Paper:A Relational Model of Data for
Large Shared Data Banks](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf)
- [Selection](https://en.wikipedia.org/wiki/Selection_(relational_algebra)
- [Relational Algebra](http://www.cs.rochester.edu/~nelson/courses/csc_173/relations/algebra.html)



 
