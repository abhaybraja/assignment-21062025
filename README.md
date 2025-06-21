# assignment-21062025
Assignment solution for Javascript and Django skills

## Javascript
Approach: 

1️. Start at the first number.
👉 Let’s say that’s your current sum so far.

2️. Move to the next number:

Should you add this to your current sum (keep extending your subarray)?

Or is this number so good (or your current sum so bad) that it’s better to start fresh from here?

``` JavaScript
  // At each number, compare:
  tempSum + thisNumber   vs   thisNumber alone
```

Pick whichever is larger — either continue or start new.

3️. Keep track of the best total you’ve seen so far.
Every time your current sum beats that best total so update your max sum, and record where this winning subarray starts and ends.

4️. Keep repeating this process to the end of the array.

### Run

``` bash
  node findMaxSum.js
```

### Complexity
➡ Time Complexity: O(n) — This is the best we can do for this problem.

➡ Space Complexity: O(1) — No extra arrays; just a few variables.

👉 So from an algorithmic perspective, there’s no faster big-O solution — because we must look at every element at least once.

## Assignment 2: Django Templating and Variable Mapping

1️. Create a Django project and app:

```bash
django-admin startproject django_tasks
cd django_tasks
```

2. Run server:

```bash
python manage.py runserver
```

Visit: http://localhost:8000/


