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

After installing required software, you can check your installation by running
the instrumentation tool on provided examples.

###First example

    > cd samples/example1-instrument
    > ./instrument.sh

or

    > cd samples/example1-instrument
    > ../../tools/instrument.perl

A file named startup.bml should be generated in samples/example1-instrument.

###Second example

    > cd samples/example2-instrument
    > ./instrument.sh

or

    > cd samples/example2-instrument
    > ../../tools/instrument.perl

A file named startup.bml should be generated in samples/example2-instrument.

##Config

Create a new folder next to your project (here my-project), with a
configuration file named config.cfg. You can use samples/example1-instrument/
or samples/example2-instrument/ as a starting point.

    # relative path to the folder with JavaScript files
    jsPath=../my-project/scripts

    # name of the BML file to generate
    outputIndex=startup.bml

    # list of the names of JavaScripts files to look for in jsPath folder
    jsFiles=a.js,b.js,c.js

##Execution

To run the instrumentation tool, open a shell in the directory with your
configuration file, and run the script instrument.perl:

    ../bml_js_Instrument/tools/instrument.perl

You may need to adapt the above command depending on the relative location
of the bml_js_Instrument/ folder.

A file named startup.bml should be generated in the same folder. You can open
this file using Access NetFront emulator or a TV set with a LIME/BML Browser.

The generated file has self-contained styles and scripts, and does not depend
on any part of the bml_js_Instrument/ project.

