
# Columnar DB

- Read Optimized - Data warehouse is one such class for this
- Periodically bulk load the new data 
- Relatively long period of ad-hoc queries
- Examples:
    - CRM
    - Library card catalogs
        
 - the values for each single column (or attribute) are stored contiguously, should be more efficient

 - DBMS needs to read only the values of the columns required for the processing a given query

 - In warehouse environment, aggregates performed over large numbers of data items, a column store has a sizeable performance advantage. 

- Current relational DBMSs were designed to pad attributes to byte or word boundaries and to store values in their native data format. 

---

# Columnar DB Contd.

- There are two ways (coding and densepacking) a column store can use CPU cycles to save disk bandwidth. 
    - can code data elements into a more compact form. For example, if one is storing an attribute that is a customer’s state of residence, then US states can be coded into six bits, whereas the two-character abbreviation requires 16 bits and a variable length character string for the name of the state requires many more.
    - one should densepack values in storage. For example, in a column store it is straightforward to pack N values, each K bits long, into N * K bits.

 - It is also desirable to have the DBMS query executor operate on the compressed representation whenever possible to avoid the cost of decompression, at least until values need to be presented to an application. 
---

# Columnar DB Contd..

- Commercial relational DBMSs store complete tuples of tabular data along with auxiliary B-tree indexes on attributes in the table.
Such indexes can be primary, whereby the rows of the table are stored in as close to sorted order on the specified attribute as possible, or secondary, in which case no attempt is made to keep the underlying records in order on the indexed attribute.
Such indexes are effective in an OLTP write-optimized environment but **do not perform well in a read-optimized world**.

-  In a read-optimized DBMS one can explore storing data using only these read-optimized structures, and not support write-optimized ones at all.

---
# Resources

- [C-Store: A Column-oriented DBMS](http://db.csail.mit.edu/projects/cstore/vldb.pdf)
