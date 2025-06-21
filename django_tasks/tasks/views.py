from django.shortcuts import render

def task_list(request):
    tasks = [
        {'title': 'SCRUM call', 'description': 'Meeting with the team', 'priority': 'High'},
        {'title': 'Read a book', 'description': 'Finish reading Django docs', 'priority': 'Low'},
        {'title': 'Workout', 'description': '30 mins cardio', 'priority': 'High'},
        {'title': 'Call mom', 'description': 'Weekly check-in', 'priority': 'Low'},
    ]
    return render(request, 'tasks.html', {'tasks': tasks})
