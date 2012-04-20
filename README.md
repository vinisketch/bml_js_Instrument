#BML JavaScript Instrumentation Tool

##Execution

./tools/instrument.perl

generate a BML file you can run into your ACCESS simulator or TV set.

##Config

jsPath= xxx

outputIndex=xxx.bml

jsFiles=xxx.js,xxx.js,xxx.js


##Requirements


Perl

JSCoverage
[JSCoverage](http://siliconforks.com/jscoverage/) 

Perl module for configuration file
[Config::Simple](http://search.cpan.org/~sherzodr/Config-Simple-4.59/Simple.pm#SIMPLE_CONFIGURATION_FILE/) 

sudo cpan install Config::Simple
or
sudo cpan -i Config::Simple


##Examples

>$ cd samples/ex1
>$ ../../tools/instrument.perl



>$ ./samples/ex2
>$ run ../../tools/instrument.perl



