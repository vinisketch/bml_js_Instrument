#!/usr/bin/perl

use strict;
use warnings;
use Config::Simple;
use File::Path;

my $cfg = new Config::Simple ('config.cfg');
my $outputIndex = $cfg->param('outputIndex');
if (!defined ($outputIndex)) { $outputIndex = "index.bml"; }

my $jsPath = $cfg->param('jsPath');
if (!defined ($jsPath)) { die ("pas de js path dans conf file") ; }

my $tempPath = "tmp_files";

my @jsFiles = $cfg->param('jsFiles');
if (!defined ($jsPath)) { die ("pas de fichiers js definis") ; }

mkpath ($tempPath, 0, 0777);

use Cwd 'abs_path';
my $base_path = abs_path($0);
$base_path = substr ($base_path, 0, rindex ($base_path, "/"));

open (HEAD_BML,  $base_path . "/resources/header.bml") || die ("Erreur d'ouverture de header.bml") ;

open (OUTPUT,">".$outputIndex) || die ("Erreur de creation de index.bml") ;

system "jscoverage $jsPath $tempPath";



sub findFirst {
   my $file_path= $_[0];
#   print "find 'jscoverage['$file_path'].source'\n";
   while (<SRC>) {
     return(1) if index($_,"jscoverage['$file_path'].source") > -1;
   }
}

sub parseFile {
  
  my $file_path = $_[0];

  open (SRC,"$tempPath/$file_path") || die ("Erreur d'ouverture de $file_path") ;
  
  findFirst ("$file_path");
    
  while (<SRC>) {
    if ($_ =~ /_\$jscoverage\[([\'\/\w.]*)\]\[([\d]*)\]\+\+/)
    {
      print OUTPUT "addCov($1,$2);\n"
    }
    else
    {
      print OUTPUT $_;
    }
  }
  close SRC;
}


while (<HEAD_BML>) { print OUTPUT $_; }
close HEAD_BML;

parseFile $_ for @jsFiles;

print OUTPUT "endAnalyse ();\n";
print OUTPUT "]]></script>\n</body>\n</bml>";

close OUTPUT;
rmtree $tempPath;


#(rindex ($_,"jscoverage['utils.js'].source") == -1))