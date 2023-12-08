
window.sanphamController = function ($scope, $http) {
    $scope.listSanPhamMoi = [];
    $http.get("http://localhost:3000/sanphammoi").then(function (response) {
        $scope.listSanPhamMoi = response.data;
    })

    $scope.listSanPhamBanChay = [];
    $http.get("http://localhost:3000/sanphambanchay").then(function (response) {
        $scope.listSanPhamBanChay = response.data;
    })
    $scope.listSanPhamAll = [];
    $http.get("http://localhost:3000/sanphamall").then(function (response) {
        $scope.listSanPhamAll = response.data;
    })
    $scope.listSanPhamQuan = [];
    $http.get("http://localhost:3000/quan").then(function (response) {
        $scope.listSanPhamQuan = response.data;
    })
    $scope.listSanPhamAo = [];
    $http.get("http://localhost:3000/ao").then(function (response) {
        $scope.listSanPhamAo = response.data;
    })

    $scope.addSPAll = function () {
        $http.post("http://localhost:3000/sanphamall", {
            id: $scope.id,
            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Them thanh cong")
            }
        });


    };

    
    $scope.detailAll = function (id) {
        $http.get("http://localhost:3000/sanphamall/" + id).then(function (response) {
            $scope.id = response.data.id;
            $scope.src = response.data.src;
            $scope.ten = response.data.ten;
            $scope.gia = response.data.gia;
        });
    }
    $scope.deleteAll = function (id) {
        $http.delete("http://localhost:3000/sanphamall/" + id).then(function (response) {
            if (response.status == 200) {
                alert("Xoa thanh cong")
            }
        });
    };
    $scope.putAll = function () {
        $http.put("http://localhost:3000/sanphamall/" + $scope.id, {

            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Sua thanh cong")
            }
        });


    };
    $scope.addSPmoi = function () {
        $http.post("http://localhost:3000/sanphammoi", {
            id: $scope.id,
            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Them thanh cong")
            }
        });


    };

    
    $scope.detailMoi = function (id) {
        $http.get("http://localhost:3000/sanphammoi/" + id).then(function (response) {
            $scope.id = response.data.id;
            $scope.src = response.data.src;
            $scope.ten = response.data.ten;
            $scope.gia = response.data.gia;
        });
    }
    $scope.deleteMoi = function (id) {
        $http.delete("http://localhost:3000/sanphammoi/" + id).then(function (response) {
            if (response.status == 200) {
                alert("Xoa thanh cong")
            }
        });
    };
    $scope.putMoi = function () {
        $http.put("http://localhost:3000/sanphammoi/" + $scope.id, {

            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Sua thanh cong")
            }
        });


    };
    $scope.addSPBanChay = function () {
        $http.post("http://localhost:3000/sanphambanchay", {
            id: $scope.id,
            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Them thanh cong")
            }
        });


    };

    
    $scope.detailBanChay = function (id) {
        $http.get("http://localhost:3000/sanphambanchay/" + id).then(function (response) {
            $scope.id = response.data.id;
            $scope.src = response.data.src;
            $scope.ten = response.data.ten;
            $scope.gia = response.data.gia;
        });
    }
    $scope.deleteBanChay = function (id) {
        $http.delete("http://localhost:3000/sanphambanchay/" + id).then(function (response) {
            if (response.status == 200) {
                alert("Xoa thanh cong")
            }
        });
    };
    $scope.putBanChay = function () {
        $http.put("http://localhost:3000/sanphambanchay/" + $scope.id, {

            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Sua thanh cong")
            }
        });


    };
    $scope.addSPAo = function () {
        $http.post("http://localhost:3000/ao", {
            id: $scope.id,
            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Them thanh cong")
            }
        });


    };

    
    $scope.detailAo = function (id) {
        $http.get("http://localhost:3000/ao/" + id).then(function (response) {
            $scope.id = response.data.id;
            $scope.src = response.data.src;
            $scope.ten = response.data.ten;
            $scope.gia = response.data.gia;
        });
    }
    $scope.deleteAo = function (id) {
        $http.delete("http://localhost:3000/ao/" + id).then(function (response) {
            if (response.status == 200) {
                alert("Xoa thanh cong")
            }
        });
    };
    $scope.putAo = function () {
        $http.put("http://localhost:3000/ao/" + $scope.id, {

            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Sua thanh cong")
            }
        });


    };
    $scope.addSPQuan = function () {
        $http.post("http://localhost:3000/quan", {
            id: $scope.id,
            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Them thanh cong")
            }
        });


    };

    
    $scope.detailQuan = function (id) {
        $http.get("http://localhost:3000/quan/" + id).then(function (response) {
            $scope.id = response.data.id;
            $scope.src = response.data.src;
            $scope.ten = response.data.ten;
            $scope.gia = response.data.gia;
        });
    }
    $scope.deleteQuan = function (id) {
        $http.delete("http://localhost:3000/quan/" + id).then(function (response) {
            if (response.status == 200) {
                alert("Xoa thanh cong")
            }
        });
    };
    $scope.putQuan = function () {
        $http.put("http://localhost:3000/quan/" + $scope.id, {

            src: $scope.src,
            ten: $scope.ten,
            gia: $scope.gia,
        }).then(function (response) {
            if (response.status == 200) {
                alert("Sua thanh cong")
            }
        });


    };
    
    
}
window.detailConTroller = function ($scope, $http, $routeParams) {
    var id = $routeParams.id;
   
      
    $http.get("http://localhost:3000/sanphamall/" + id).then(function (response) {
        $scope.id = response.data.id;
        $scope.src = response.data.src;
        $scope.ten = response.data.ten;
        $scope.gia = response.data.gia;
    });
    $http.get("http://localhost:3000/sanphammoi/" + id).then(function (response) {
        $scope.id = response.data.id;
        $scope.src = response.data.src;
        $scope.ten = response.data.ten;
        $scope.gia = response.data.gia;
    });
    $http.get("http://localhost:3000/sanphamchayhang/" + id).then(function (response) {
        $scope.id = response.data.id;
        $scope.src = response.data.src;
        $scope.ten = response.data.ten;
        $scope.gia = response.data.gia;
    });
    $scope.count=0;
    $scope.tang=function(){
        $scope.count++;
    }
    $scope.giam=function(){
        $scope.count--;
        if($scope.count<0){
            $scope.count=0;
        }
    }}
    window.giohangController=function($scope,$http){
        $scope.listGioHang = [];
        $http.get("http://localhost:3000/giohang").then(function (response) {
            $scope.listGioHang = response.data;
        })
        $scope.addSPmoi = function () {
            $http.post("http://localhost:3000/giohang", {
                id: $scope.id,
                src: $scope.src,
                ten: $scope.ten,
                size:$scope.size,
                gia: $scope.gia,
                sl:$scope.sl,
            }).then(function (response) {
                if (response.status == 200) {
                    alert("Them thanh cong")
                }
            });
    }
    }
