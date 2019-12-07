## Table of Contents
{:.no_toc.nonumber}
{% if page.numbersections %}
1. ToC
{:toc}
{:.toc}
{% else %}
- ToC
{:toc}
{:.toc}
{% endif %}

{% comment %}
NOTE: 
Any section headings with the "nonumber" class will cause the ToC numbers to not match the actual heading numbers.
However, it's pretty unlikely that this will ever come up.
Someone would need to set the heading class to "nonumber" manually, which would be a wierd thing to do.

This is because the list elements do not inherit the class of the headings,
and therefore there is no good way to create a rule to omit their numbers.
{% endcomment %}
