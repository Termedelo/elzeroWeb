<?php 
class C{
    public $var1;
    private $var2;
    protected $var3;
    public function __set($key, $value){
        echo "Added or modified successfully $key => $value";
    }
    public function __get($key){
        echo "gutted successfully $key";
    }
    public function __call($name, $args){
     if ($name == "show") {
        echo "<pre>";
        print_r($args);
        echo "</pre>";
        echo "<br>";
    }
    }
    public static function __callStatic($name, $args){
    if ($name == "showStatic") {
        echo "<pre>";
        print_r($args);
        echo "</pre>";
        echo "<br>";
     }
    }
}