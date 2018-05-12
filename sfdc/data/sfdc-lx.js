var lxWords = {
"LEX:Component Namespace":
[
  "Every component is part of a namespace, which is used to group related components together. If your organization has a namespace prefix set, use that namespace to access your components. Otherwise, use the default namespace (c) to access your components."
," Another component or application can reference a component by adding <myNamespace:myComponent> in its markup. For example, the helloWorld component is in the docsample namespace. Another component can reference it by adding "
," <docsample:helloWorld /> in its markup."
," Lightning components that Salesforce provides are grouped into several namespaces, such as aura, ui, and force."
],

"LEX:Lightning Bundle Configurations":
[
  'Lightning Tab: <pre>implements="force:appHostable"</pre>  Creates a component for use as a <b>navigation element</b> in Lightning Experience or Salesforce App<hr/>'
 ,'Lightning Page: <pre>implements="flexipage:availableForAllPageTypes" access="global"</pre>  Creates a component for use in Lightning Pages or the Lightning App Builder.<hr/>'
 ,'Lightning Record Page: <pre>implements="flexipage:availableForRecordHome, force:hasRecordId"  access="global"</pre> Creates a component for use on a record home page in Lightning Experience.<hr/>'
 ,'Lightning Communities Page: <pre>implements="forceCommunity:availableForAllPageTypes"  access="global"</pre>  Creates a component that’s available for drag and drop in the Community Builder.<hr/>'
 ,'Lightning Quick Action: <pre>implements="force:lightningQuickAction"</pre> Creates a component that can be used with a Lightning quick action.<hr/>'
 ,'Lightning Out Dependency App: <pre>extends="ltng:outApp"</pre>  Creates an empty Lightning Out dependency app.'
]

}
