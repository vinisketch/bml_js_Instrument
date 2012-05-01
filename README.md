#BML JavaScript Instrumentation Tool

##Execution

./tools/instrument.perl

generates a BML file that you can run with your ACCESS emulator or TV set.

##Config

    # relative path to the folder with JavaScript files
    jsPath=./scripts

    # name of the BML file to generate
    outputIndex=startup.bml

    # list of the names of JavaScripts files to look for in jsPath folder
    jsFiles=xxx.js,xxx.js,xxx.js


##Requirements


###Perl

###JSCoverage
[JSCoverage](http://siliconforks.com/jscoverage/) 

###Perl module for configuration file
[Config::Simple](http://search.cpan.org/~sherzodr/Config-Simple-4.59/Simple.pm#SIMPLE_CONFIGURATION_FILE/) 

    sudo cpan install Config::Simple
or

    sudo cpan -i Config::Simple


##Examples

###First example

    > cd samples/ex1
    > ../../tools/instrument.perl

###Second example

    > ./samples/ex2
    > run ../../tools/instrument.perl

