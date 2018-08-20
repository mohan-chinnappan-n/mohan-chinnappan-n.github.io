document.getElementById("app").innerHTML = `



<pre>
  <div class="slds-box">
    <p>This is a regular-sized box.</p>
  </div>
</pre>

<div class="slds-box">
  <p>This is a regular-sized box.</p>
</div>

<div style="padding: 1rem;">
  <div class="slds-align_absolute-center" 
    style="text-align: center; width: 8rem; background-color: #efe;">
    <div class="slds-border_top">This should have a top border.</div>
  </div>
</div>

 <div class="slds-box slds-theme_shade slds-theme_alert-texture">
  <p>This is a
    <strong>slds-theme_shade</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
</div>

 <div class="slds-box slds-theme_inverse slds-theme_alert-texture">
  <p>This is a
    <strong>slds-theme_inverse</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
</div>

 <div class="slds-box slds-theme_warning slds-theme_alert-texture">
  <p>This is a
    <strong>slds-theme_warning</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
</div>

 <div class="slds-box slds-theme_error slds-theme_alert-texture">
  <p>This is a
    <strong>slds-theme_error </strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
</div>

 <div class="slds-box slds-theme_info slds-theme_alert-texture">
  <p>This is a
    <strong>slds-theme_info </strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
</div>

 <div class="slds-box slds-theme_offline slds-theme_alert-texture">
  <p>This is a
    <strong>slds-theme_offline </strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
</div>




 <div class="slds-box slds-theme_success slds-theme_alert-texture">
  <p>This is a
    <strong>slds-theme_success</strong> theme and here is a <a href="javascript:void(0);">link</a>.</p>
</div>

<h4>Vertical Lists</h4>

<ul class="slds-theme_inverse">
  <li>Vertical List with nested vertical lists</li>
  <li>List Item</li>
  <li>
  <ul class="slds-is-nested">
    <li>Nested Vertical List</li>
    <li>List Item</li>
    <li>
      <ul class="slds-is-nested">
        <li>Nested Vertical List</li>
        <li>List Item-1</li>
        <li>List Item-2</li>
      </ul>
  </li>
  </ul>
 </li>
</ul>


`;
