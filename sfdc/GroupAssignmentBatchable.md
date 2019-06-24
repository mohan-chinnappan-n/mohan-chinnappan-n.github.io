### GroupAssignmentBatchable


#### References
 [Database Class](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_methods_system_database.htm)

``` java

Database.executeBatch(new FinServ.GroupAssignmentBatchable(), numRecordsinBatch); 

```

```

executeBatch(batchClassObject, scope)
Submits a batch Apex job for execution using the specified class and scope.

Signature
public static ID executeBatch(Object batchClassObject, Integer scope)

Parameters

  batchClassObject
    Type: Object
    An instance of a class that implements the Database.Batchable interface.


  scope
    Type: Integer
    Number of records to be passed into the execute method for batch processing.

Return Value
Type: ID
The ID of the new batch job (AsyncApexJob).
If the executeBatch call fails to acquire an Apex flex queue lock, 
the call returns an empty ID, "000000000000000", instead of throwing an exception.


Usage
The value for scope must be greater than 0.

QueryLocator:

If the start method of the batch class returns a Database.QueryLocator, 
 the scope parameter of Database.executeBatch can have a maximum value of 2,000. 

 If set to a higher value, Salesforce chunks the records returned by the QueryLocator into smaller batches of up to 200 records. 

 In case of GroupAssignmentBatchable the batch record size will 200 to 2k records since:
 its start(...) method returns a QueryLocator.



Iterable:

If the start method of the batch class returns an iterable, 
the scope parameter value has no upper limit; however, if you use a very high number, you could run into other limits.

Apex governor limits are reset for each execution of execute.

```


