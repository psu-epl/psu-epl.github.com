# Machine Statuses
{% for category in site.data.machines %}
## {{ category.title }}
{% for machine in category.machines %}
### {{ machine.name }}
 {% if machine.up == true %}
 This machine is up.
 {% elsif machine.up == false %}
 This machine is down.
 {% else %}
 This machine is having issues.
 {% endif %}
 ![]({{ site.url }}/images/{{ machine.img }})
{% endfor %}
{% endfor %}
