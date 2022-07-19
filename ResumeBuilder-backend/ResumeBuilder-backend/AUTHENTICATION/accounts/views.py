from django.shortcuts import render,redirect
from.forms import CreateUserForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

from django.contrib.auth import authenticate,login,logout


def registerPage(request):
    form=CreateUserForm()

    if request.method =='POST':
        form= CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user=form.cleaned_data.get('username')
            messages.success(request,'Account is created for'+user)

            return redirect('login')

    context={'form':form}

    return render(request,'register.html',context)

# Create your views here.

def loginPage(request):
    if request.method=='POST':
        username=request.POST.get('username')
        password= request.POST.get('password')

        user=authenticate(request,username=username, password=password)

        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            messages.info(request,'invalid credentials')    
    context={}
    return render(request,'login.html',context)



def home(request):
    return render(request,'home.html')  

def logoutUser(request):
    logout(request)
    return redirect('login')
