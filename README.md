#BML JavaScript Instrumentation Tool

##About

This tool helps to find issues in JavaScript code running in a LIME Browser.
Some code that works in the emulator or in your development environment may
fail on a TV, and the step by step debugging to locate the error can prove
frustrating. Using this tool, you can run all steps at once and determine
whether the code could run fully or at which point the code stopped, thanks
to logs that indicate progress after each instruction.

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

##Config

    # relative path to the folder with JavaScript files
    jsPath=./scripts

    # name of the BML file to generate
    outputIndex=startup.bml

    # list of the names of JavaScripts files to look for in jsPath folder
    jsFiles=a.js,b.js,c.js

##Execution

./tools/instrument.perl

generates a BML file that you can run with your ACCESS emulator or TV set.

